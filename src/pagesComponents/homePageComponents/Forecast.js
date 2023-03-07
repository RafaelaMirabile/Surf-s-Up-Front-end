import { useContext, useEffect, useState } from "react"
import styled from "styled-components";
import AirTemperature from "../forcastComponents/AirTemperature";
import SwellPeriod from "../forcastComponents/SwellPeriod";
import WaveHeightDirection from "../forcastComponents/WaveHeight&Direction";
import WindDirectionSpeed from "../forcastComponents/WindDirection&Speed";

export default function Forecast({ selectedPointName, forcastList }) {
console.log(forcastList);
const findForecastOfSelectedPoint = forcastList.filter(forecast => forecast.pointName === selectedPointName);
const forecasrForDisplay = findForecastOfSelectedPoint.map(forecast => forecast.forcast);
console.log(forecasrForDisplay.map((value) => value.airTemperature));

    return (
        <Wrapper>
            <WaveHeightDirection
            forecasrForDisplay={forecasrForDisplay}
            />
    
        </Wrapper>
    )

}

const Wrapper = styled.div`
border: 2px solid orange;
width: 100%;
height: 80%;
display: flex;
flex-direction: column;
justify-content: space-around;
`
