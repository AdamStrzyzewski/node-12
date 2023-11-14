const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World changes</h1><p>test</p>");
});

app.listen(3000, () => {
  console.log("listening for http requests");
});
