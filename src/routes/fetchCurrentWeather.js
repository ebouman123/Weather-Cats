import axios from "axios";

export const fetchCurrentWeather = async (lat, lon) => {
    console.log(lat, lon)
    const response = await axios.get(`http://localhost:5001/api/currentWeather/${lat}/${lon}`); 
    return(response.data);
  };
  

