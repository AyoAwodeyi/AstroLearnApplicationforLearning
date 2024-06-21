require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;
const connect_string = process.env.CONNECTION_STRING;



app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to our API");
});



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
