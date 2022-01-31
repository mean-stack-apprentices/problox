import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UserModel } from "../schemas/user.schema.js";

dotenv.config()

export const adminRouter = express.Router()

const saltRounds = 10;
const access_secret = process.env.ACCESS_SECRET as string;

adminRouter.post("/create-admin",  function (req, res) {
    const {name, username, email, password } = req.body;
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        const admin = new UserModel({
          name,
          username,
          email,
          password: hash,
          role: 'admin'
        });
  
        admin
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
