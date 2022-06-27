// require main packages
const express = require("express");
const dotenv = require("dotenv");

// require files
const connectDB = require("./config/connectDB");
const colors = require("colors");

// initialize the app
const app = express();

// Load env vars
dotenv.config();

// connect to db
connectDB();

// Port Number
const PORT = process.env.PORT || 5555;

// Listining on the port
app.listen(PORT, () => {
  console.log(`app is runing on port ${PORT}`);
});
