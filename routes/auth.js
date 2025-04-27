import express from "express";
import jwt from "jsonwebtoken";
import { myLogger, requestTime } from "../middleware.js";
import { UserLoginSchema, UserRegisterSchema } from "../schemas/userSchema.js";
export const auth = express.Router();

auth.use(express.json());

auth.use(myLogger);
auth.use(requestTime);

auth.post("/login", (req, res) => {
  try {
    const { username, password } = req.body;
    const user = {
      username: username,
      password: password,
    };
    const response = UserLoginSchema(user);
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });
    const message = `User ${username} logged in successfully`;
    res.json({ message, response: response, token: token });
  } catch (error) {
    console.error("Error in /login route:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
auth.post("/register", (req, res) => {
  const { username, password } = req.body;
  const user = {
    username: username,
    password: password,
  };
  const response = UserRegisterSchema(user);
  res.json({ response: response });
});
