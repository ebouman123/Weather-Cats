const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5001;

// Route Includes
const exampleRouter = require("./routes/example.router");

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/example", exampleRouter);

// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
