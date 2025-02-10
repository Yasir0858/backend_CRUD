const Todo = require("../models/todoModel")

const getTodos = async (req,res)=>{

   const todos = await Todo.find()
   if (todos) {
    res.status(200).json(todos)
   } else {
    res.status(404).json({msg:"No Todos found"})
   }
    
}

const getTodo = async(req,res)=>{

    const todo = await Todo.findById(req.params.id)
    if (todo) {
     res.status(200).json(todo)
    } else {
     res.status(404).json({msg:"No Todos found"})
    }
     
 }
    


const addTodo = async (req,res)=>{

   const{title, description} = req.body
   if (!title || !description)
   res.status(400).json({mes: "Plz fill all details"})
    
   const newTodo = await Todo.create({title,description})
   if (newTodo) {
    res.status(201).json(newTodo)
   } else {
    res.status(400).json({mes: "Todo Not Created"})
   }
}

const updateTodo = async (req,res)=>{

    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if (updatedTodo) {
        res.status(201).json(updatedTodo)
       } else {
        res.status(400).json({mes: "Todo Not Updated"})
       }
}

const removeTodo = async (req,res)=>{

    await Todo.findByIdAndDelete(req.params.id)
    res.json({msg:"Todo Deleted"})
    
}

module.exports = {getTodo, updateTodo, removeTodo, addTodo, getTodos}