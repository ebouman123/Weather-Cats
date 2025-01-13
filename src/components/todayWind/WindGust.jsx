import { useSelector } from "react-redux";

export default function WindGust() {
    const currentWeather = useSelector((state) => state.currentWeather);

    if (!currentWeather?.wind?.gust) {
        return <div></div>;
    }

    return <div>Wind Gusts: {currentWeather.wind.gust}mph</div>;
}
