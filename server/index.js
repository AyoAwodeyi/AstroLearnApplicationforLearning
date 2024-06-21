const express = require("express");

const app = express();

require("dotenv").config();








app.get("/", (req, res) => {
  res.send("Welcome to our API");
});



const connect_string = process.env.CONNECTION_STRING;
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
