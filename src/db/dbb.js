// File: src/db/dbb.js (or src/db/index.js)
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";  // Correct relative path to constants.js

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`\n MongoDB connected!! DB Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("Mongo DB connection error::", error);
    process.exit(1);
  }
};

export default connectDB;  // Exporting connectDB using default export
