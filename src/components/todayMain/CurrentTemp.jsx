import { useSelector } from "react-redux";

export default function CurrentTemp() {
    const currentWeather = useSelector((state) => state.currentWeather);

    if (!currentWeather?.main?.temp) {
        return <div></div>;
    }

    return <div>Current Temp: {currentWeather.main.temp}°F</div>;
}
