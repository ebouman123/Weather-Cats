const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5001;
const cors = require("cors");

app.use(cors());

// Route Includes
const locationRouter = require("./routes/location.router");
const currentWeatherRouter = require("./routes/currentWeather.router");

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/location", locationRouter);
app.use("/api/currentWeather", currentWeatherRouter);

// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
