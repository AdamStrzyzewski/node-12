const express = require("express");
const cors = require("cors");

const app = express();

// fetch("http://localhost:3000/").then(req => req.text()).then(console.log)
// fetch("http://localhost:3000/", { method: "POST" })
//   .then((req) => req.text())
//   .then(console.log);

const corsOptions = {
  origin: ["http://localhost:3000", "https://www.google.com"],
  // lack of GET and POST are ignored
  methods: ["GET"],
  //   exposedHeaders
  //   allowedHeaders
};

app.use(cors(corsOptions));

// origin: '*'

app.get("/", (req, res) => {
  res.send("GET");
});

app.post("/", (req, res) => {
  res.send("POST");
});

app.delete("/", (req, res) => {
  res.send("DELETE");
});

app.listen(3000, () => {
  console.log("listening");
});
