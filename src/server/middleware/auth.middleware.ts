import { NextFunction, Request, RequestHandler, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../../shared/models/user.model.js";

dotenv.config()

export interface AuthRequest extends Request {
  user?: User;
}

const access_secret = process.env.ACCESS_SECRET as string;
console.log("accessSecret", access_secret)
function authHandle(req: AuthRequest, res: Response, next: NextFunction) {
  const cookie = req.cookies["jwt"];
  console.log("auth", cookie);
  if(!cookie){
    return res.sendStatus(403);

  }
  jwt.verify(
    cookie,
    access_secret,
    (err: any, result: any) => {
      if (err) {
        console.log(err)
        return res.sendStatus(403);
      }
      if (result) {
        req.user = result.user;
      }
      next();
    }
  );
}

export const authHandler = authHandle;
