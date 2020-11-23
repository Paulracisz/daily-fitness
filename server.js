const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
require("dotenv").config()
const app = express()
const path = require('path')

mongoose.connect(process.env.MONGODBURI,
    { 
        useNewUrlParser:true, 
        useUnifiedTopology:true, 
        useCreateIndex:true, 
        useFindAndModify:false, 
    } ,      
      (err) => { 
        err ? console.log(err) : console.log("database is connected")
})

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.static(path.join(__dirname, "client", "build")))


app.use("/api", require("./routes/addFitness.js"))

app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT)
})

