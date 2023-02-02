import { useEffect, useState } from "react"
import styled from "styled-components";
import Forecast from "../pagesComponents/homePageComponents/Forecast.js";
import Points from "../pagesComponents/homePageComponents/Points.js"
import Reports from "../pagesComponents/homePageComponents/Reports.js";
import { getPoints } from "../services/API.js";

export default function HomePage() {
    const [pointList, setPointsList] = useState([]);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [selectedPointName, setSelectedPointName] = useState('');
    const [selectedPointId, setSelectedPointId] = useState(0);
    const [forecastOrReport, setForecastOReport] = useState('forcast');


    useEffect(() => {
        getPoints().then((response) => {
            setPointsList(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);


    return (
        <>
            <div>HomePage</div>
            {latitude.length === 0 ? <>
                {pointList.map((point, index) => (
                    <Points
                        key={index}
                        name={point.name}
                        id={point.id}
                        setLatitude={setLatitude}
                        setLongitude={setLongitude}
                        latitude={point.latitude}
                        longitude={point.longitude}
                        setSelectedPointName={setSelectedPointName}
                        setSelectedPointId={setSelectedPointId}
                    />
                ))} </> :
                <>
                    <ForecastOrReport>
                        <ForcastButton forecastOrReport={forecastOrReport} onClick={() => setForecastOReport('forcast')}>Forcast</ForcastButton>
                        <ReportButton forecastOrReport={forecastOrReport} onClick={() => setForecastOReport('report')}>Report</ReportButton>
                    </ForecastOrReport>
                    {forecastOrReport === 'forcast' ?
                        <Forecast
                            latitude={latitude}
                            longitude={longitude}
                            selectedPointName={selectedPointName}
                        /> :
                        <Reports
                            selectedPointName={selectedPointName}
                            selectedPointId={selectedPointId}
                        />}
                </>
            }
        </>
    )
}

const ForecastOrReport = styled.div`
border: 2px solid red ;
`
const ForcastButton = styled.div`
border: 2px solid green;
background-color: ${props => props.forecastOrReport === 'forcast' ? 'green' : 'black'};
`
const ReportButton = styled.div`
border: 2px solid purple;
background-color: ${props => props.forecastOrReport === 'forcast' ? 'black' : 'green'};
`