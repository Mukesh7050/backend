// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"

import {app} from './app.js'


dotenv.config({
    path:'./.env'
})

const port = process.env.PORT||8000
connectDB()
.then(()=>{
    app.on("error",(error)=>{
            console.log("ERROR :",error);
            throw error;
        })
        
    app.listen( port,()=>{
        console.log(`server is running on port${port}`);
    })
})
.catch((err)=>{
    console.log("mongo db connection failed !!!!",err);
    
})




/*
import express from "express";

const app = express();


;(async()=>{
    try{
        mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR :",error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port ${process.env.PORT}`);
            
        })
    }
    catch(error){
        console.log("ERROR: ",error);
        throw error;
    
    }
    })()
    
    */