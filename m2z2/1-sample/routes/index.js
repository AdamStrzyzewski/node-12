const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: Math.random() });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.render("response", { email, password });
});

module.exports = router;
