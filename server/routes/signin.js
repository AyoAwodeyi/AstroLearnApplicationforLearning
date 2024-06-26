const bcrypt = require("bcrypt");
const { User } = require("../models/user");
const Joi = require("joi");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  // Validate request body
  const schema = Joi.object({
    email: Joi.string().min(3).max(200).required().email(),
    password: Joi.string().min(6).max(200).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    console.error("Validation error:", error.details[0].message);
    return res.status(400).send(error.details[0].message);
  }

  try {
    // Check if user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      console.error("User not found");
      return res.status(400).send("Invalid email or password.");
    }

    // Validate password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      console.error("Invalid password");
      return res.status(400).send("Invalid email or password.");
    }

    // Successful authentication response
    res.send("Login successful.");
  } catch (err) {
    // Log the error and send generic message
    console.error("Server error:", err);
    res.status(500).send("Something went wrong. Please try again later.");
  }
});

module.exports = router;
