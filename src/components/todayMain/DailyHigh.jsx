import { useSelector } from "react-redux";

export default function DailyHigh() {
    const currentWeather = useSelector((state) => state.currentWeather);

    if (!currentWeather?.main?.temp_max) {
        return <div></div>;
    }

    return <div>Today's High: {currentWeather.main.temp_max}°F</div>;
}
