const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const a = {
    name: "Danial",
    age: 19,
  };

  res.json(a);
});

module.exports = router;
