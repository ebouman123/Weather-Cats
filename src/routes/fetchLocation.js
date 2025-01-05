import axios from "axios";

export const fetchLocation = async (city, state) => {
  const response = await axios.get(
    `http://localhost:5001/api/location/${city}/${state}`
  );
  return response.data;
};
