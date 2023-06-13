const express=require("express")
const mongoose= require("mongoose")
const apps =require("./app")
const app = express()
app.use(apps)




const config = require("./Config/config.js")

mongoose
.connect("mongodb://127.0.0.1/todoList")
.then(()=>{
    console.log("connected to database")
}).then(()=>{
    app.listen(( 2023),()=>{
        console.log("server is running on port")
    })
})
.catch((error)=>{
    console.log(error.message)

})