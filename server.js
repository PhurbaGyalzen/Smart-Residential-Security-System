import express from 'express';
import connectDB from "./db/connectDB.js";
import dotenv from "dotenv";

dotenv.config(); // load .env file

const DATABASE_URL = process.env.DATABASE_URL;
connectDB(DATABASE_URL); 

const server = express();
server.get("/", (req, res) => {
  res.send("Welcome to learn backend with express!");
});
server.listen(8000, () => {
  console.log("Example app listening on port http://localhost:8000");
});
