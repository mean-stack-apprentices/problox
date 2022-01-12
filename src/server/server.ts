import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import * as socketIO from "socket.io";
import http from 'http';
import dotenv from "dotenv";
import path from 'path';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "./schemas/user.schema.js";
import { ChatModel } from "./schemas/chat.schama.js";

dotenv.config();

const saltRounds = 10;

const __dirname = path.resolve();

const access_secret = process.env.ACCESS_SECRET as string;

const app = express();
const server = http.createServer(app);
const clientPath = path.join(__dirname, '/dist/client');
app.use(express.static(clientPath));

const io = new socketIO.Server(server,  { cors: {
  origin: '*'
}});

const PORT = process.env.PORT || 3000;

mongoose
.connect("mongodb://localhost:27017/real-time-chat-app")
  .then(() => {
    console.log("Connected to DB Successfully");
  })
  .catch((err) => console.log("Failed to Connect to DB", err));

app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:4200', 'http://localhost:3501', 'http://localhost:8080']
}));
app.use(express.json());

app.get("/api/test", function (req, res) {
  res.json({message: "Hello World!"});
});

app.post("/api/create-user", function (req, res) {
  const { name, username, email, password } = req.body;

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      const user = new UserModel({
        name,
        username,
        email,
        password: hash,
        role: 'basic'
      });

      user
      .save()
        .then((data:any) => {
          res.json({ data });
        })
        .catch((err:any) => {
          res.status(501);
          res.json({ errors: err });
        });
    });
  });
});

app.post("/api/login", function(req, res) {
  const {username, password} = req.body;

  UserModel.findOne({username}).then(user => {
    bcrypt.compare(password, `${user?.password}`, function(err, result) {
      if (result) {
        const accessToken = jwt.sign({user}, access_secret)
        res.cookie('jwt', accessToken, {
          httpOnly: true,
          maxAge: 3600 * 1000,
        })
        res.json({data: user});
      } else {
        res.sendStatus(502);
      }
    })
  })
});

app.all("/api/*", function (req, res) {
  res.sendStatus(404);
});


app.post("/create-chat", function(req, res) {
  const {sender, to, text} = req.body
  const chat = new ChatModel({
    sender,
    to,
    text
  });
  chat
  .save()
  .then((data) => {
    res.json((data))
  })
  .catch((err) => {
    console.log(err);
    res.status(501);
    res.json({errors: err})
  })
})
app.get("/chats", function(req, res) {
  ChatModel.find()
  .then((data) => res.json({data}))
  .catch((err) => {
    res.status(501);
    res.json({ errors: err });
  });
})

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