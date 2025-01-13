import WindDirection from "./WindDirection"
import WindGust from "./WindGust"
import WindSpeed from "./WindSpeed"

export default function TodayWind(){
    return(
        <>
        <WindSpeed />
        <WindDirection />
        <WindGust />
        </>
    )
}