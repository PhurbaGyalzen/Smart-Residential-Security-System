import express from "express";
import connectDB from "./db/connectDB.js";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import personRoute from "./routes/person_route.js";
import entryRoute from "./routes/entry_routes.js";

dotenv.config(); // load .env file

const DATABASE_URL = process.env.DATABASE_URL;
connectDB(DATABASE_URL);

const server = express();
server.use(cors()); // to allow cross origin requests
server.use(helmet()); // for security purpose
server.use(express.json()); // for parsing application/json
server.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
server.use(morgan("dev")); // for logging
server.use("/", personRoute);
server.use("/entry/", entryRoute);
server.get("/", (req, res) => {
  res.send("Welcome to learn backend with express!");
});
server.listen(8000, () => {
  console.log("Example app listening on port http://localhost:8000");
});
