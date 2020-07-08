const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// const {signup,signin} = require("../controller/auth")

const requirelogin = require("../middleware/requireSignin");


// Protected route


router.get("/home", requirelogin, (req, res) => {
  res.send("hello");
});

// Signup Route

router.post("/signup", async (req, res, next) => {
  // const hashedPassword = bcrypt.hashSync(req.body.password,10);

  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ error: "*All fields are required *" });
    }

    const finduser = await User.findOne({ email });
    if (finduser) {
      return res.status(400).json({error: "user alreday exist*" });
    }
    // const hashedPassword=await bcrypt.hash(password,10)
    const salt = await bcrypt.genSaltSync(10);
    var hash = await bcrypt.hashSync(req.body.password, salt);
    const user = new User({
      name,
      email,
      password: hash,
    });
    const signUser = await user.save();
    res.status(200).json(signUser);
  } catch (err) {
    res.send(err);
  }
});

// Signin Route

router.post("/signin", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.json({ error: "All fields are required" });
    }

    const finduser = await User.findOne({ email });
    if (!finduser) {
      return res.status(400).json({ error: "user doesn't exist pls signup" });
    }

    const log = await bcrypt.compareSync(req.body.password, finduser.password);
    if (!log) {
      return res.json({ error: "email & password not match" });
    }

    const token = await jwt.sign({ _id: log._id }, process.env.secret);
    const {_id,name} = finduser
    console.log({ token });
    res.json({token,user:{_id,name,email}});
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
