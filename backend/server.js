// Importing express module
const express = require("express");
const cors = require("cors");
const app = express();

// Enable parsing of JSON request bodies
app.use(express.json());

// Enable parsing plain text request bodies
app.use(express.text());

// Enable CORS for all routes
app.use(cors());

// Handling GET request
app.get("/testGet", (req, res, next) => {
  res.send("This is a message from the backend");
});

// Handle POST requests
app.post("/testPost", (req, res) => {
  const data = req.body; // Access the data sent in the request body
  console.log(data);
  res.send(
    "Data received successfully. Check the backend terminal for message"
  );
});

// Server setup
app.listen(3000, () => {
  console.log("Server is Running");
});
