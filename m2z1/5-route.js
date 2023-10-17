const express = require("express");
const app = express();
const routes = require("./5-router");

const authorize = (req, res, next) => {
  if (req.query.apiKey === "412") {
    next();
  } else {
    res.send("hola hola");
  }
};

app.use("/api", authorize, routes);

app.get("/", (req, res) => {
  res.send("main path");
});

app
  .route("/contacts")
  .get((req, res) => {
    res.send("get a list of contacts");
  })
  .post((req, res) => {
    res.send("I'm a post");
  })
  .put((req, res) => {
    res.send("I'm a put");
  });
// app.use("/secretApi", routes);

app.listen(3000, () => {
  console.log("Listening");
});
