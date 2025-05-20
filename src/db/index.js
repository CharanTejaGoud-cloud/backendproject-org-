
import { DB_NAME } from "../constants.js";
import mongoose from "mongoose"
import express from "express"


const connectDB=async()=>{
    try {
        const connectionInstance=mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("connected");
        
    } catch (error) {
        console.log("mongodb connection error");
        
    }
}
export default connectDB;