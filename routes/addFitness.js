const express = require('express')
const fitnessRouter = express.Router()
const fitnessModel = require("../models/fitnessModel")

fitnessRouter.post("/add", (req, res, next) => { 
    const newModel = new fitnessModel(req.body)
    newModel.save((err, newModel) => { 
        if(err){ 
            res.status(500)
            return next(err)
        } 
        return res.status(200).send(newModel)
    })
})

fitnessRouter.get("/getall", (req, res, next) => { 
    fitnessModel.find((err, allThings) => { 
        if(err){ 
            res.status(500)
            return next(err)
        }
        return res.status(200).send(allThings)
    })
})

fitnessRouter.put("/:modelId", (req, res, next) => { 
    fitnessModel.findOneAndUpdate({_id: req.params.modelId}, req.body, {new: true}, (err, newThing) => { 
        if(err){ 
            res.status(500)
            return next(err)
        } 
        return res.status(200).send(newThing)
    })
})

module.exports = fitnessRouter