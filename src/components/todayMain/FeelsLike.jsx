import { useSelector } from "react-redux";

export default function FeelsLike() {
    const currentWeather = useSelector((state) => state.currentWeather);

    if (!currentWeather?.main?.feels_like) {
        return <div></div>;
    }

    return <div>Feels Like: {currentWeather.main.feels_like}°F</div>;
}
