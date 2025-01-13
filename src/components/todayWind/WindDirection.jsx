import { useSelector } from "react-redux";

export default function WindDirection() {
    const currentWeather = useSelector((state) => state.currentWeather);

    if (!currentWeather?.wind?.deg) {
        return <div></div>;
    }

    return <div>Wind Direction: {currentWeather.wind.deg}°</div>;
}
