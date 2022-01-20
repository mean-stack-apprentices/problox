import express from "express";
import { ChatModel } from '../schemas/chat.schema.js';
export const chatRouter = express.Router();
chatRouter.post("/create-message", function (req, res) {
    const { sender, to, text } = req.body;
    const chat = new ChatModel({
        sender,
        to,
        text
    });
    chat
        .save()
        .then((data) => {
        res.json((data));
    })
        .catch((err) => {
        console.log(err);
        res.status(501);
        res.json({ errors: err });
    });
});
chatRouter.get("/chats", function (req, res) {
    ChatModel.find()
        .then((data) => res.json({ data }))
        .catch((err) => {
        res.status(501);
        res.json({ errors: err });
    });
});
//# sourceMappingURL=chat-route.js.map