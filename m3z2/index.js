const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const routerApi = require("./api");

const { DB_HOST: uriDb } = process.env;

const connection = mongoose.connect(uriDb);

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", routerApi);

app.use((req, res) => {
  res.status(404).json({ message: `whooops - ${req.path}` });
});

app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    res.status(400).json({ message: err.message });
    // res.status(422).json({ message: err.message });
  } else {
    res.status(500).json({ message: err.message });
  }
});

async function startServer() {
  try {
    await connection;
    console.log("DB connected");
    app.listen(3000, function () {
      console.log("API listening");
    });
  } catch (err) {
    console.log("DB not connected, shutting down");
    process.exit(1);
  }
}

startServer();
