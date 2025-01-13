import { useSelector } from "react-redux";
import clearSkyDay from "../../assets/01d.png";
import clearSkyNight from "../../assets/01n.png";
import fewCloudsDay from "../../assets/02d.png";
import fewCloudsNight from "../../assets/02n.png";
import scatteredClouds from "../../assets/03d.png";
import brokenClouds from "../../assets/04d.png";
import showerRain from "../../assets/09d.png";
import rainDay from "../../assets/10d.png";
import rainNight from "../../assets/10n.png";
import thunderstorm from "../../assets/11d.png";
import snow from "../../assets/13d.png";
import mist from "../../assets/50d.png";

export default function Conditions() {
  const currentWeather = useSelector((state) => state.currentWeather);

  let weatherIcon;

  if (!currentWeather?.weather[0]?.description) {
    return <div></div>;
  }

  switch (currentWeather.weather[0].icon) {
    case "01d":
      weatherIcon = clearSkyDay;
      break;
    case "01n":
      weatherIcon = clearSkyNight;
      break;
    case "02d":
      weatherIcon = fewCloudsDay;
      break;
    case "02n":
      weatherIcon = fewCloudsNight;
      break;
    case "03d" || "03n":
      weatherIcon = scatteredClouds;
      break;
    case "04d" || "04n":
      weatherIcon = brokenClouds;
      break;
    case "09d" || "09n":
      weatherIcon = showerRain;
      break;
    case "10d":
      weatherIcon = rainDay;
      break;
    case "10n":
      weatherIcon = rainNight;
      break;
    case "11d" || "11n":
      weatherIcon = thunderstorm;
      break;
    case "13d" || "13n":
      weatherIcon = snow;
      break;
    case "50d" || "50n":
      weatherIcon = mist;
      break;
    default:
      weatherIcon = overcast;
      break;
  }

  return (
    <>
      <div>
        Current Weather Conditions: {currentWeather.weather[0].description}
      </div>
      <img
        src={weatherIcon}
        alt={currentWeather.weather[0].description}
        style={{ width: "100px" }}
      />
    </>
  );
}
