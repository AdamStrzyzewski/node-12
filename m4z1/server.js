import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import api from "./routes/index.js";
import setJWTStrategy from "./config/jwt.js";

dotenv.config();

const { DB_HOST: dbUri } = process.env;

const app = express();

app.use(express.json());
app.use(cors());

setJWTStrategy();

app.use("/api", api);

const connection = mongoose.connect(dbUri);

connection.then(() => {
  app.listen(3000, () => {
    console.log("server is running, db connected");
  });
});
