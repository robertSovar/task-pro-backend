import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

function signup(data) {
  try {
    const { email, password } = data;
    const saltRound = 10;
    const hashedPassword = bcrypt.hash(password, saltRound);

    const newUser = {
      email,
      password: hashedPassword,
    };

    return User.create(newUser);
  } catch (error) {
    next(error);
  }
}

const authController = {
  signup,
  //   login,
  //   logout,
};

export default authController;
