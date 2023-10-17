const express = require("express");
const path = require("path");
const app = express();

// path params
// app.get("/contacts/:id", (req, res) => {
//   console.log(req.params);
//   res.send(`<h1>Conctact with id ${req.params.id}</h1>`);
// });

// app.get("/contacts/:id/:resource", (req, res) => {
//   console.log(req.params);
//   res.send(
//     `<h1>Contact with id ${req.params.id} about resousrce ${req.params.resource}</h1>`
//   );
// });

// query params
// ?
// key=value

// /users?key=value&key2=value2
// /users?key=value&key=value2
// /users?key[]=value&key[]=value2
// /users?key[1]=value&key[0]=value2
// /users?key['test']=value&key['test2']=value2
// app.get("/users", (req, res) => {
//   console.log(req.query);
//   res.send(JSON.stringify(req.query));
// });

app.use(express.static(path.join(__dirname, "public4")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/login", (req, res) => {
  console.log(req.query);
  res.json(req.query);
});

app.post("/login", (req, res) => {
  console.log(req.body.password);
  res.json(req.body);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
