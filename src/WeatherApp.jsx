import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function WeatherApp(){
    let [cityData, setCityData] = useState({
        city: "Delhi",
        feels_like: 40.71,
        humidity: 59,
        temp: 33.71,
        temp_max: 33.71,
        temp_min: 33.71,
        weather: "scattered clouds",
    });

    let info1 = (newInfo) => {
        setCityData(newInfo);
    }

    return (
        <>
        <SearchBox updateInfo={info1}/>
        <InfoBox info={cityData}/>
        </>
    );
}