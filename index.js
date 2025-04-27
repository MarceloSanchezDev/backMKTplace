import express from "express";
import { auth } from "./routes/auth.js";
const app = express();

const port = 3000;

app.use(express.json());
app.use("/auth", auth);
//app.use("/products", products);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});
app.listen(port, () => {
  console.log(`Listen on port: http://localhost:${port}`);
});
