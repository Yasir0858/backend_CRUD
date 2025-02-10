const express = require ("express");
const connectDB = require("./config/db_config");
const dotenv = require("dotenv").config()


const app = express()

const port = process.env.port || 5090 ;
connectDB()
// body parser

app.use(express.json());

app.use(express.urlencoded({extended: true}))

app.use("/api/todo", require("./routes/todoRoutes"))

app.listen(port, ()=>{
    console.log(`server is runing ${port}`);
    
})