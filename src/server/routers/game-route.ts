import express from "express";
import { GameModel } from '../schemas/game.schema.js'
export const gameRouter = express.Router();

gameRouter.get("/", function(req,res){
    GameModel.find({}, "-_id")
    .then(data => {
      res.json({data})
    })
    .catch(err => {
      res.status(501).json({Error: err})
    })
  })
  
  gameRouter.post("/create-game", function(req, res){
    const {name, description, price, imgUrl, tier} = req.body;
  
    const game = new GameModel({
      name, 
      description, 
      price,
      imgUrl,
      tier
    });
  
    game.save()
    .then(data => {
      res.json({data});
    }).catch(err => {
      res.status(500).json({message: "Something went wrong"})
    })
  })
