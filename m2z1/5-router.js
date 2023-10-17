const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("main path of 5 router");
});

router.get("/about", (req, res) => {
  res.send("app version 0.00001");
});

module.exports = router;
