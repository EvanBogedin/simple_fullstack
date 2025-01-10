// Importing express module
const express = require("express");
const cors = require("cors");
const app = express();

// Enable CORS for all routes
app.use(cors());

// Handling GET / request
app.use("/test", (req, res, next) => {
  res.send("test");
});

// Handling GET /hello request
app.get("/hello", (req, res, next) => {
  res.send("hello response");
});

// Server setup
app.listen(3000, () => {
  console.log("Server is Running");
});
