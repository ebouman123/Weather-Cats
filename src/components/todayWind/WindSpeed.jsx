import { useSelector } from "react-redux";

export default function WindSpeed() {
    const currentWeather = useSelector((state) => state.currentWeather);

    if (!currentWeather?.wind?.speed) {
        return <div></div>;
    }

    return <div>Wind Speed: {currentWeather.wind.speed}mph</div>;
}
