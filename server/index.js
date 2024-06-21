require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001; // Use a different port if 3000 is in use
const connect_string = process.env.CONNECTION_STRING;

// Debugging line to check if the connection string is loaded
console.log("Connection String from .env:", connect_string);


// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to our API");
});

// Connect to MongoDB
mongoose
  .connect(connect_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
