import express from "express";
import { MerchModel } from "../schemas/merch.schema.js";

export const merchRouter = express.Router();

merchRouter.post("/create-merch", function(req,res) {
    const {name, price, description, imgUrl} = req.body;

    const merch = new MerchModel( {
        name,
        price,
        description,
        imgUrl
    })
    merch
    .save()
    .then(data => {
        console.log('new merch : ' + data)
        res.json(data);
    })
    .catch(err => res.status(501).json(err))
});

merchRouter.get("", function(req,res) {
    MerchModel
    .find()
    .then(data => res.json(data))
    .catch(err => res.status(403).json(err))
})

