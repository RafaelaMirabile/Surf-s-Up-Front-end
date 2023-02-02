import { useEffect, useState } from "react"
import { getForecast } from "../../services/API.js";

export default function Forecast({ latitude, longitude, selectedPointName }) {

    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        const body = {
            longitude: longitude,
            latitude: latitude
        }
        /*getForecast(body).then((response) => {
            setForecast(response.data.hours);
        }).catch((error) => {
            console.log(error);
        });*/
    }, []);

    const forecastByHour = forecast.filter((forecast, index) => index === 6 || index === 9 || index === 15 || index === 18);
    console.log(forecastByHour);
    
    return (
        <>ALA</>
    )

}