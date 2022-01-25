import express from "express";
import bcrypt from "bcrypt";
import "jsonwebtoken";
import dotenv from "dotenv";
import { UserModel } from "../schemas/user.schema.js";
dotenv.config();
export const adminRouter = express.Router();
const saltRounds = 10;
const access_secret = process.env.ACCESS_SECRET;
adminRouter.post("/create-admin", function (req, res) {
    const { name, username, email, password } = req.body;
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
                .then((data) => {
                res.json({ data });
            })
                .catch((err) => {
                res.status(501);
                res.json({ errors: err });
            });
        });
    });
});
//# sourceMappingURL=admin.route.js.map