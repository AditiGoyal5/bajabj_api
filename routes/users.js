var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.post("/bfhl", function (req, res, next) {
  const { array } = req.body;

  const numArray = [];
  const stringArray = [];

  array.forEach((item) => {
    if (typeof item === "number") {
      numArray.push(item);
    } else if (typeof item === "string") {
      stringArray.push(item.toUpperCase());
    }
  });

  const oddArray = numArray.filter((num) => num % 2 !== 0);
  const evenArray = numArray.filter((num) => num % 2 === 0);
  const response = {
    is_success: true,
    user_id: "aditigoyal_05082003",
    email: "aditi1617.be21@chitkara.edu.in",
    roll_number: "2110991617",
    odd_numbers: oddArray,
    even_numbers: evenArray,
    alphabets: stringArray,
  };
  res.json(response);
});
module.exports = router;
