const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const axios = require("axios");

router.get("/:lat/:lon", async (req, res) => {
  const { lat, lon } = req.params;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.appid}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching current weather data");
  }
});

module.exports = router;
