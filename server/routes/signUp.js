const express = require("express");
const Joi = require("joi");
const bcrypt = require("bcrypt"); // Correctly require bcrypt
const router = express.Router();
const { User } = require("../models/user"); // Ensure this model exists and is correctly defined

// POST endpoint for sign up
router.post("/", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(5).max(200).email().required(), // Correct the min length
    password: Joi.string().min(6).max(200).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  try {
    let user = await User.findOne({ email: req.body.email });
    if (user)
      return res.status(400).send("User with that email already exists");

    const { name, email, password } = req.body;

    user = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt); // Correctly hash the password

    await user.save();

    res.send("User created");
  } catch (err) {
    res.status(500).send(err.message);
    console.log(err.message);
  }
});

module.exports = router;
