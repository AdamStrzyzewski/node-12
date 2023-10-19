const logger = require("morgan");
const express = require("express");

const app = express();

// :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
// app.use(logger("combined"));
// app.use(logger("dev"));
// app.use(logger("common"));
// app.use(logger("short"));
// app.use(logger("tiny"));
// app.use(logger(":method :url :user-agent"));

app.get("/", (req, res) => {
  res.send("");
});

app.listen(3000, () => {
  console.log("listening");
});
