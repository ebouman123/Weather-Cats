import { useSelector } from "react-redux";

export default function CloudCover() {
  const currentWeather = useSelector((state) => state.currentWeather);

  if (!currentWeather?.clouds?.all) {
    return <div></div>;
  }

  const cloudPercentage = currentWeather.clouds.all;
  let cloudinessDescription;

  if (cloudPercentage <= 10) {
    cloudinessDescription = "Clear";
  } else if (cloudPercentage <= 50) {
    cloudinessDescription = "Partly Cloudy";
  } else if (cloudPercentage <= 90) {
    cloudinessDescription = "Mostly Cloudy";
  } else {
    cloudinessDescription = "Overcast";
  }

  return <div>{cloudinessDescription}</div>;
}
