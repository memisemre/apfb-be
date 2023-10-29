import express from "express";
import { config } from "dotenv";
import DB from "./db.js";
config();
const app = express();
const PORT = process.env.PORT;
DB();
app.get("/", (req, res) => {
  res.json("Hello World");
});

app.listen(PORT, () => {
  console.log("App Start");
  console.log(`Example app listening on port ${PORT}`);
});
