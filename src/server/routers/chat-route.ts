import express from "express";
import { ChatModel } from '../schemas/chat.schema'
const router = express.Router();

router.post("/api/create-message", function(req, res) {
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
  router.get("/api/chats", function(req, res) {
    ChatModel.find()
    .then((data) => res.json({data}))
    .catch((err) => {
      res.status(501);
      res.json({ errors: err });
    });
  })

module.exports = router;