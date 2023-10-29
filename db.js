import mongoose from "mongoose";
import { config } from "dotenv";
config();
const DB = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
export default DB;
