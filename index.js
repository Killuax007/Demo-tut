//  Day 3 of learning basic Express endpoints and Methods
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const port = 8000;
app.use(bodyparser.json());
app.get("/", function (req, res) {
  res.send({ message: "Simple nodejs application hosted in AWS" });
});
app.listen(port, () => {
  console.log("listening on port " + port);
});
