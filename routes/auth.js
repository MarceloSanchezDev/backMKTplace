import express from "express";
import { myLogger, requestTime } from "../middleware.js";
import { UserLoginSchema, UserRegisterSchema } from "../schemas/userSchema.js";
export const auth = express.Router();

auth.use(express.json());

auth.use(myLogger);
auth.use(requestTime);

auth.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = {
    username: username,
    password: password,
  };
  const response = UserLoginSchema(user);
  res.json({ response: response });
});
auth.post("/register", (req, res) => {
  const { username, password } = req.body;
  const user = {
    username: username,
    password: password,
  };
  const response = UserLoginSchema(user);
  res.json({ response: response });
});
