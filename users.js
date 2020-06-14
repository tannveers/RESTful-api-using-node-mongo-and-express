const express = require("express");
const router = express.Router();
const config = require("config");
const db = config.get("link_to_db");
const mongoose = require("mongoose");
const User = require("./models/usermodel");

//connect database
mongoose.connect(
  db,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("db connected");
  }
);

// create a new user in the database on cloud!
router.post("/", async (req, res) => {
  const user = new User({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const user_x = await user.save();
    res.json(user_x);
  } catch (error) {
    res.json({ message: error });
  }
});

// Displaying the user using get request!

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({ msg: error });
  }
});

module.exports = router;
