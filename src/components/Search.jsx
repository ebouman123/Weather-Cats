import { fetchLocation } from "../routes/fetchLocation";
import { fetchCurrentWeather } from "../routes/fetchCurrentWeather";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Search() {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const locationResponse = await fetchLocation(city, state);
      const currentWeatherResponse = await fetchCurrentWeather(
        locationResponse.lat,
        locationResponse.lon
      );
      dispatch({ type: "SET_LOCATION", payload: locationResponse });
      dispatch({
        type: "SET_CURRENT_WEATHER",
        payload: currentWeatherResponse,
      });
    } catch (error) {
      alert("Are you sure that's what you meant to type?");
      console.error("Error with handleSearch ->", error);
    }
  };

  return (
    <form>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
      ></input>
      <input
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="State"
      ></input>
      <button onClick={handleSearch}>Search</button>
    </form>
  );
}
