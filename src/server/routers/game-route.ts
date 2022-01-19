import express from "express";
import { GameModel } from '../schemas/game.schema'
const router = express.Router();

router.get("/api/games", function(req,res){
    GameModel.find({}, "-_id")
    .then(data => {
      res.json({data})
    })
    .catch(err => {
      res.status(501).json({Error: err})
    })
  })
  
  router.post("/api/create-game", function(req, res){
    const {name, description, price, imgUrl, categories} = req.body;
  
    const game = new GameModel({
      name, 
      description, 
      price,
      imgUrl,
      categories
    });
  
    game.save()
    .then(data => {
      res.json({data});
    }).catch(err => {
      res.status(500).json({message: "Something went wrong"})
    })
  })
  module.exports = router;