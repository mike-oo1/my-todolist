const mongoose=require("mongoose")


const todoList = mongoose.Schema({
    name:String,
    taskOne:String,
    taskTwo:String,
    isDone:Boolean
},{timestamps:true})

const models =mongoose.model("todoList",todoList)

module.exports = models