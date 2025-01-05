import { useSelector } from "react-redux";

export default function DailyLow() {
    const currentWeather = useSelector((state) => state.currentWeather);

    if (!currentWeather?.main?.temp_min) {
        return <div></div>;
    }

    return <div>Today's Low: {currentWeather.main.temp_min}°F</div>;
}
