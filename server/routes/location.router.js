const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const axios = require("axios");

router.get("/:city/:state", async (req, res) => {
  const { city, state } = req.params;
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state}&limit=1&appid=${process.env.appid}`
    );
    res.json(response.data[0]);
  } catch (error) {
    res.status(500).send("Error fetching location data");
  }
});

module.exports = router;
