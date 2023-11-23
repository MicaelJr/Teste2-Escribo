const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

const UserModel = require("../models/User");

const router = express.Router();

const generateToken = (User = {}) => {
  return jwt.sign(
    {
      id: User.id,
      name: User.name,
    },
    authConfig.secret,
    {
      expiresIn: 1800,
    }
  );
};

router.post("/register", async (req, res) => {
  const { email } = req.body;

  if (await UserModel.findOne({ email })) {
    return res.status(400).json({
      error: true,
      message: "User already exists",
    });
  }

  const User = await UserModel.create(req.body);

  User.password = undefined;

  return res.json({ User, token: generateToken(User) });
});

router.post("/authenticate", async (req, res) => {
  const { email, password } = req.body;

  const User = await UserModel.findOne({ email }).select("+password");

  if (!User) {
    return res.status(400).json({
      error: true,
      message: " User not found",
    });
  }

  if (!(await bcryptjs.compare(password, User.password))) {
    return res.status(400).send({
      error: true,
      message: "Invalid password",
    });
  }

  User.password = undefined;

  return res.json({ User, token: generateToken(User) });
});

module.exports = router;
