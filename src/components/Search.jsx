import { fetchLocation } from "../routes/fetchLocation";
import { useState } from "react";

export default function Search() {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    fetchLocation(city, state);
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
