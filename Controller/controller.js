const express= require("express")
const todoModel =require("../Models/models")

exports.newTodo = async(req,res)=>{
    try {
        const newTodo =await todoModel.create(req.body)
        if(!newTodo){
            res.status(500).json({
                message:"cannot create this todo"
            })
        }else{
            res.status(200).json({
                message:"this todo has been created",
                data:newTodo
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
        
    }
}

exports.getAll = async(req,res)=>{
    try {
        const getAll = await todoModel.find()
        res.status(200).json({
            message:"here are all the todo's",
            data:getAll
        })
        
    } catch (error) {
        res.status(404).json({
            message:error.message
        })
        
    }
}

exports.getOne = async(req,res)=>{
    try {
        const id = req.params.id
        const getOne = await todoModel.findById(id)
        if(!getOne){
            res.status(404).json({
                message:`the todo with id ${id} is not found`
            })
        }else{
            res.status(200).json({
                message:`here is the todo with id ${id}`,
                data:getOne
            })
            
        }
        
    } catch (error) {
        res.ststus(500).json({
            message:error.message
        })
        
    }
  
}

exports.getTrueOrfalseTasks = async(req,res)=>{
    try {
        const trueOrFalse= await todoModel.find({isDone:true})
        res.status(200).json({
            message:`here are tasks that were achieved`,
            data:trueOrFalse
        })
        
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
        
    }
}
exports.update =async(req,res)=>{
    try {
        const id = req.params.id
        const update = await todoModel.findByIdAndUpdate(id,req.body)
        res.status(200).json({
            message:`the todo with id ${id} has been updated successfully`,
            data:update
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
        
    }
}

exports.deleted = async(req,res)=>{
    try {
        const id = req.params.id
      const deleted = await todoModel.findByIdAndDelete(id)
      res.status(200).json({
        message:`the user with id ${id} has been deleted successfully`,
        data:deleted
      })
        
    } catch (error) {
        res.status(200).json({
            message:error.message
        })
        
    }
}