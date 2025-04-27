import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import { auth } from "./routes/auth.js";
const app = express();

const port = 3000;
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/auth", auth);
//app.use("/products", products);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});
app.listen(port, () => {
  console.log(`Listen on port: http://localhost:${port}`);
});
