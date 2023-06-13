const express= require("express")
const Router =express.Router()

const{newTodo,getAll,getOne,getTrueOrfalseTasks,update,deleted}=require("../Controller/controller")
Router.route("/create").post(newTodo)
Router.route("/allTodo").get(getAll)
Router.route("/one/:id").get(getOne)
Router.route("/true").get(getTrueOrfalseTasks)
Router.route("/update/:id").patch(update)
Router.route("/delete/:id").delete(deleted)




module.exports =Router