const mongoose = require('mongoose')
const Schema = mongoose.Schema

const fitnessModel = new Schema({
    height: { 
        type: String, 
        required: false,
    }, 
    weight: { 
        type: Number
    }, 
    calories: { 
        type: Number,
        required: true
    }

})

module.exports = mongoose.model("fitnessModel", fitnessModel)
