// require('dotenv').config({path:'./env'});
import 'dotenv/config'  
// File: src/index.js (or wherever you are calling connectDB)
import connectDB from "./db/dbb.js";  // or import from "./db/index.js" if you're using that path



// dotenv.config({
//   path:'./env'
// });



connectDB();



















/*
import express from "express";
const app=express();
;(async ()=>{
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",(error)=>{
      console.log("ERROR",error)
      throw error
    })
    app.listen(process.env.PORT,()=>{
      console.log(`App is listening on port ${process.env.PORT}`)
    })
  }
  catch(error){
    console.log("ERROR",error);
    throw error
  }
})()
*/