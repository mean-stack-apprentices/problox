import express from "express";
import { UserModel } from "../schemas/user.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { roleHandler } from "../middleware/role.middleware.js";
import { authHandler } from "../middleware/auth.middleware.js";
import { RoleModel } from "../schemas/role.schema.js";

dotenv.config();

export const userRouter = express.Router();

const saltRounds = 10;
const access_secret = process.env.ACCESS_SECRET as string;

        const role = await RoleModel.findOne( {name: "ADMIN"})
userRouter.post("/create-user", function (req:any, res:any) {
    const { name, username, email, password } = req.body;
    const role = req.role
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        const user = new UserModel({
          name,
          username,
          email,
          password: hash,
         roles:[role?._id]
         
        });
    });
  });
});

userRouter.post("/login", function (req, res) {
  const { username, password } = req.body;

  UserModel.findOne({ username }).then((user) => {
    bcrypt.compare(password, `${user?.password}`, function (err, result) {
      if (result) {
        const accessToken = jwt.sign({ user }, access_secret);
        res.cookie("jwt", accessToken, {
          httpOnly: true,
          maxAge: 3600 * 1000,
        });
        res.json({ data: user });
      } else {
        res.sendStatus(502);
      }
    });
  });
});

  userRouter.post("/valid-username", async function(req, res){
    const {username} = req.body;
    let user = await UserModel.findOne({username}).lean();
    if (user) {
      res.json({validUsername: false});
    } else {
      res.json({validUsername: true});
    }
  })
    userRouter.get("/logged-in-user",authHandler,async function(req:any, res){
        const user = await UserModel.findById(req.user._id).populate('roles')
        res.status(200).json({data:user})
    })

    userRouter.get("/logout", authHandler, function (req, res) {
      res.cookie("jwt", "", {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
      });
      res.json({ message: "Successfully Logged out" });
    });
    
    userRouter.get("/", async function (req, res) {
      const users = await UserModel.find({});
      res.json({ data: users });
    });
    