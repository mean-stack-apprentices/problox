import express from "express";
import { authHandler } from "../middleware/auth.middleware.js";
import { roleHandler } from "../middleware/role.middleware.js";
import { MerchModel } from "../schemas/merch.schema.js";

export const merchRouter = express.Router();

merchRouter.post("/create-merch",authHandler,roleHandler(['ADMIN']), function(req,res) {
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

