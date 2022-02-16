import express from "express";
import { UserModel } from "../schemas/user.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { authHandler } from "../middleware/auth.middleware.js";
import { RoleModel } from "../schemas/role.schema.js";

dotenv.config();

export const userRouter = express.Router();

const saltRounds = 10;
const access_secret = process.env.ACCESS_SECRET as string;

//create user (basic or admin or pro)
export async function  createUser(roleName: string, user: any) {
  const createUserPromise = new Promise(async (resolve, reject) => {
    const role = await RoleModel.findOne({ name: roleName });
    console.log(roleName,".....role....", role);
    const { name, username, email, password } = user;
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        const user1 = new UserModel({
          name,
          username,
          email,
          password: hash,
<<<<<<< HEAD
         roles:[role?._id]
=======
          roles: [role?._id],
>>>>>>> experiment
        });
        user1
        .save()
        .then(data => resolve(data))
        .catch(err => reject(err))
      });
    });
  });
  return createUserPromise;
}

userRouter.post("/create-user", async function (req: any, res: any) {
  const user = req.body;
  console.log("user: ", user);

  createUser("BASIC", user)
  .then(data => res.status(200).json(data))
  .catch(err => res.status(501).json(err))
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

<<<<<<< HEAD
  userRouter.post("/valid-username", async function(req, res){
    const {username} = req.body;
    let user = await UserModel.findOne({username}).lean();
    if (user) {
      res.json({validUsername: false});
    } else {
      res.json({validUsername: true});
    }
  });

    userRouter.get("/logged-in-user",authHandler,async function(req:any, res){
        const user = await UserModel.findById(req.user._id).populate('roles')
        res.status(200).json({data:user})
    });

    userRouter.get('/api/check-login', authHandler, (req, res) => {
      res.json({message: 'yes'});
    });
=======
userRouter.post("/valid-username", async function (req, res) {
  const { username } = req.body;
  let user = await UserModel.findOne({ username }).lean();
  if (user) {
    res.json({ validUsername: false });
  } else {
    res.json({ validUsername: true });
  }
});
userRouter.get("/logged-in-user", authHandler, async function (req: any, res) {
  const user = await UserModel.findById(req.user._id).populate("roles");
  res.status(200).json({ data: user });
});
>>>>>>> experiment

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
