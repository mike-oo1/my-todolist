const express = require("express")
const app = express()
const route =require("./Router/route")
app.use(express.json())
app.use("/api",route)



module.exports =app 