const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

app.use(bodyParser.json());

app.get("*", (req, res) => {
  res.send("Try the post endpoint");
});

app.post("*", (req, res) => {
  console.log("req.body", req.body);

  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
