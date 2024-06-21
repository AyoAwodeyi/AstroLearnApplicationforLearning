require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const signUp = require("./routes/signUp");
const signin = require("./routes/signin");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;
const connect_string = process.env.CONNECTION_STRING;

// Debugging line to check if the connection string is loaded
console.log("Connection String from .env:", connect_string);

if (!connect_string) {
  console.error(
    "No connection string found. Please set CONNECTION_STRING in your .env file."
  );
  process.exit(1);
}

// Middleware
app.use(express.json());
app.use(cors());

app.use("/api/signUp", signUp);
app.use("/api/signin", signin);


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
