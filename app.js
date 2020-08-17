const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("get request on 5000");
});

app.listen(8080, () => {
  console.log("server listening on 5000");
});
