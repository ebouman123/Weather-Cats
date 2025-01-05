import { useSelector } from "react-redux";

export default function CurrentTemp() {
  const currentWeather = useSelector((state) => state.currentWeather);

  return <div>Current Weather: {JSON.stringify(currentWeather)}</div>;
}
