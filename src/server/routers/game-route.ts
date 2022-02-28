import express from "express";
import { authHandler } from "../middleware/auth.middleware.js";
import { roleHandler } from "../middleware/role.middleware.js";
import { GameModel } from '../schemas/game.schema.js'
export const gameRouter = express.Router();

gameRouter.get("/", function(req,res){
    GameModel.find()
    .then(data => {
      res.json({data})
    })
    .catch(err => {
      res.status(501).json({Error: err})
    })
})
  
gameRouter.post("/create-game",authHandler,roleHandler(['ADMIN']), function(req, res){
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
});

gameRouter.put("/update-game/:id", function(req,res){
  const gameId = req.params.id;
  const {name, description, price, imgUrl, tier} = req.body;
 
  GameModel.findByIdAndUpdate(
    gameId,
    {
      $set: {name: name, description: description, price: price, imgUrl: imgUrl, tier: tier}
    },
    {
      new: true,
      runValidators: true,
    },
  ).then(data => res.json({data}))
  .catch(err => res.status(501).json(err))
});