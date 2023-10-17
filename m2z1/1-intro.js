const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("I'm in a get");
  res.send("Hello World");
});

app.post("/", (req, res) => {
  res.send("POST");
});

// app.get("/contact", (req, res) => {
//   res.send(`<h1>Contact Page</h1>`);
// });

// + - previous symbol can occur once or more times
// conntact
// connntact
// app.get("/con+tact", (req, res) => {
//   res.send(`<h1>Contact Page + ${req.originalUrl}</h1>`);
// });

// ? - previous symbol once or none
// app.get("/con?tact", (req, res) => {
//   res.send(`<h1>Contact Page ? ${req.originalUrl}</h1>`);
// });

// * - any symbols or nothing
app.get("/con*tact", (req, res) => {
  res.send(`<h1>Contact Page * ${req.originalUrl}</h1>`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
