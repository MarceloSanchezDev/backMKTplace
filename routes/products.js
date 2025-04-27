import express, { response } from "express";
import { myLogger, requestTime } from "../middleware.js";
export const auth = express.Router();

auth.use(express.json());

auth.use(myLogger);
auth.use(requestTime);

auth.get("/products", (req, res) => {
  response = "products";
  res.json({ response: response });
});
auth.post("/products", (req, res) => {
  response = "products";
  res.json({ response: response });
});
