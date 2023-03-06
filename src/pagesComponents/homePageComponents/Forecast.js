import { useContext, useEffect, useState } from "react"
import styled from "styled-components";
import AirTemperature from "../forcastComponents/AirTemperature";
import SwellPeriod from "../forcastComponents/SwellPeriod";
import WaveHeightDirection from "../forcastComponents/WaveHeight&Direction";
import WindDirectionSpeed from "../forcastComponents/WindDirection&Speed";

export default function Forecast({ selectedPointName, forcastList }) {

    const a = [{
        waveHeight: '6',
        airTemperature: '16',
        currentDirection: 'SE',
        windDirection: 'L',
        swellPeriod: '10',
        windSpeed: '10'
    }, {
        waveHeight: '5',
        airTemperature: '20',
        currentDirection: 'L',
        windDirection: 'S',
        swellPeriod: '8',
        windSpeed: '14'
    }, {
        waveHeight: '4',
        airTemperature: '23',
        currentDirection: 'N',
        windDirection: 'SE',
        swellPeriod: '6',
        windSpeed: '5'
    }, {
        waveHeight: '3',
        airTemperature: '23',
        currentDirection: 'S',
        windDirection: 'NE',
        swellPeriod: '5',
        windSpeed: '5'
    }]
    return (
        <Wrapper>
            <WaveHeightDirection
            a={a}
            />
            <SwellPeriod
                a={a}
            />
            <WindDirectionSpeed
            a={a}
            />
            <AirTemperature
                a={a}
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
