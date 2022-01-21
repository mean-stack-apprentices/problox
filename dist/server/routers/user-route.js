import express from "express";
import { UserModel } from '../schemas/user.schema.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const userRouter = express.Router();
const saltRounds = 10;
const access_secret = process.env.ACCESS_SECRET;
userRouter.post("/create-user", function (req, res) {
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
userRouter.post("/login", function (req, res) {
    const { username, password } = req.body;
    UserModel.findOne({ username }).then(user => {
        bcrypt.compare(password, `${user?.password}`, function (err, result) {
            if (result) {
                const accessToken = jwt.sign({ user }, access_secret);
                res.cookie('jwt', accessToken, {
                    httpOnly: true,
                    maxAge: 3600 * 1000,
                });
                res.json({ data: user });
            }
            else {
                res.sendStatus(502);
            }
        });
    });
});
userRouter.post("/valid-username", async function (req, res) {
    const { username } = req.body;
    let user = await UserModel.findOne({ username }).lean();
    if (user) {
        res.json({ validUsername: false });
    }
    else {
        res.json({ validUsername: true });
    }
});
userRouter.get('/', async function (req, res) {
    const users = await UserModel.find({});
    res.json({ data: users });
});
//# sourceMappingURL=user-route.js.map