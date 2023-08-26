import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./Routes/Routes.js"
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/Moi", routes)

mongoose.set("strictQuery", true)
const connect = async () => {
    try {
        await mongoose.connect(process.env.MOIDB);
        console.log("database connected");
    } catch (err) {
        console.log(err);
    }
}

app.listen(5000, () => {
    connect();
    console.log("server is running on port number 5000");
}) 