import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

function connectToMongoDB() {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to MongoDB successfully");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
}

export default connectToMongoDB;
