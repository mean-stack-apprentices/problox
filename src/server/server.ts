import express, { NextFunction } from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import * as socketIO from "socket.io";
import http from 'http';
import dotenv from "dotenv";
import path from 'path';
import { apiRouter } from './routers/api.routes.js'
import { RoleModel } from "./schemas/role.schema.js";
import { UserModel } from "./schemas/user.schema.js";
import { createUser } from "./routers/user-route.js";

dotenv.config();

const __dirname = path.resolve();

const app = express();
const server = http.createServer(app);
const clientPath = path.join(__dirname, '/dist/client');
app.use(express.static(clientPath));

const io = new socketIO.Server(server,  { cors: {
  origin: '*'
}});

const PORT = process.env.PORT || 3000;

//create  3 roles 'admin', 'basic' and 'pro'
function createRoles() {
  const roles_array = [
    {name: "ADMIN"},
    {name: "BASIC"},
    {name: "PRO"}
  ];

  return RoleModel.insertMany(roles_array)
  .then((data) => {
    console.log("roles created: ",data)
  })
  .catch((err) => console.log("error in creating roles: ", err));
}

// checks if roles exist or not
function checkRoles() {
  const rolesPromise = new Promise((resolve, reject) => {
    RoleModel
    .find({name: {$in: ["ADMIN", "BASIC", "PRO"]}})
    .then( async (data) => {
      if(data.length) {
        console.log("role exists: ", data.length);
        console.log(data);
        resolve(data);
      }
      if(!data.length) {
        console.log("No roles: ", data.length);
        const roles = await createRoles();
        resolve(roles);
      }
    } )
    .catch((error) => {
        console.log("error.....", error);
    })
  })
  return rolesPromise;
}

//create admin 
const admin_user = {
  name: 'admin', 
  username: 'admin', 
  password: process.env.ADMIN_PWD, 
  email: process.env.ADMIN_EMAIL
};

// check if there is "admin" in UserModel
async function checkAdmin() {
  const admin = await RoleModel.findOne({name: 'ADMIN'})
  console.log("admin id......",admin);

  UserModel
    .findOne({roles: {$in : [admin?._id] } })
    .then(data => {
      if(data) {
        console.log("admin found in user:",data);
      }
      else {
        console.log("admin NOT found in user:");
        // create default admin 
        createUser('ADMIN',admin_user)
        .then(data => console.log("admin created:", data))
        .catch(err => console.log("error creating admin"));
      }
    })
    .catch(err => console.log("findAdmin errr:",err))
}

mongoose
.connect(`${process.env.MONGO_URL}`)
  .then(async () => {
    console.log("Connected to DB Successfully");
    await checkRoles();// check if there is roles collection, if no, create 3 roles (user,admin,pro)
    checkAdmin();// check if there is no admin, create new user whose role id is of admin
  })
  .catch((err) => console.log("Failed to Connect to DB", err));

app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:4200', 'http://localhost:3501', 'http://localhost:8080']
}));
app.use(express.json());


app.use('/api', apiRouter);

server.listen(PORT, function () {
  // console.log(`starting at localhost http://localhost:${PORT}`);
});

io.on('connection', function(socket){

 socket.on('join', function(data) {
   socket.join(data.room)
   io.emit('new user joined', {user:data.user, message:'joined.'})
 })
  socket.on('leave', function(data){
io.emit('left room', {user:data.user, message:'left room.'});
socket.leave(data)
  });
  socket.on('message', function(data) {
    io.in(data.room).emit('new message', {user:data.user, message:data.message})
  })
  
});

app.all("*", function (req, res) {
  const filePath = path.join(__dirname, '/dist/client/index.html');
  res.sendFile(filePath);
});