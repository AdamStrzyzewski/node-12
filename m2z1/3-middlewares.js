const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.locals.startTimestamp = new Date().getTime();
  next();
});

app.get("/1", (req, res, next) => {
  setTimeout(() => {
    res.json({ path: 1 });
    next();
  }, Math.random() * 500);
});

app.get("/2", (req, res, next) => {
  res.json({ path: 2 });
  next();
});

app.use((req, res) => {
  console.log(
    `${req.method} | ${req.originalUrl} | ${
      new Date().getTime() - res.locals.startTimestamp
    }ms`
  );
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
