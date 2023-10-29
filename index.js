const express = require("express");
const ENV = require("dotenv");
ENV.config();
const app = express();
const PORT = process.env.PORT;
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(PORT, () => {
  console.log("App Start");
  console.log(`Example app listening on port ${PORT}`);
});
