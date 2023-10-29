import express from "express";
import { config } from "dotenv";
import DB from "./db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import User from "./models/user.js";
config();
const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT;
DB();
app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    console.log(username + password);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).send("User Save");
  } catch (error) {
    console.error(error);
    res.status(500).send("Bir hata oluştu");
  }
});
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
});

app.listen(PORT, () => {
  console.log("App Start");
  console.log(`Example app listening on port ${PORT}`);
});
