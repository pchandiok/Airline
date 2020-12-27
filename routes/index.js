const express = require('express');
const index = express.Router();

index.get("/", (req, res) => {
  res.render("index", { title: "Hackers Codes"});
});


module.exports = index;
