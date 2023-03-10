import { useState } from "react";
import styled from "styled-components";
import { getForecast } from "../../services/API";

export default function Points({ name, id, setLatitude, setLongitude, latitude, longitude, setSelectedPointName, selectedPointName, setSelectedPointId, setShowList, forcastList, setForcastList }) {
    console.log("Renderizou");

    function requestForcast() {
        const sendForcastRequest = forcastList.some((forcast, index) => forcast.pointName === name)
        console.log(sendForcastRequest);

        if (sendForcastRequest) {
            console.log("n chamou");
        }
        else {
            const body = {
                longitude: longitude,
                latitude: latitude
            }
          /*  getForecast(body).then((response) => {
                const forecast = response.data.hours;
                const forecastByHour = forecast.filter((forecast, index) => index === 6 || index === 9 || index === 15 || index === 18);
                setForcastList([...forcastList, { pointName: name, forcast: forecastByHour}]);
            }).catch((error) => {
                console.log(error);
            });*/
        }
    }


    return (
        <Point>
            <div onClick={() => {
                setLatitude(latitude);
                setLongitude(longitude);
                setSelectedPointName(name);
                requestForcast();
                setSelectedPointId(id);
                setShowList(1);
            }}>
                <p>
                    {name}
                </p>
            </div>
        </Point>
    );
}


const Point = styled.div`
border-bottom: 1px solid #68D2DF;
display: flex;
justify-content: space-between;
padding: 4px 0px 8px 0px;
margin-top: 6px;

p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 700;
    font-size: 19.976px;
    line-height: 25px;
    color: #095e79;
}
`