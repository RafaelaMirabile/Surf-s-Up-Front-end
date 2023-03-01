import Forecast from "./Forecast.js"
import Points from "./Points.js"
import Reports from "./Reports.js";
import { useContext, useEffect, useState } from "react"
import styled from "styled-components";
import { getPoints } from "../../services/API.js";
import PointsContext from "../../contexts/pointsContext.js";

export default function PointsList(){
    const [pointList, setPointsList] = useState([]);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [selectedPointName, setSelectedPointName] = useState('');
    const [selectedPointId, setSelectedPointId] = useState(0);
    const [forecastOrReport, setForecastOReport] = useState('forcast');
    const {showList, setShowList} = useContext(PointsContext);

    useEffect(() => {
        getPoints().then((response) => {
            console.log(response.data)
            setPointsList(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    return (
        <Wrapper>
          {showList === 0 ? <>
          
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
                        setShowList={setShowList}
                    />
                ))} </> :
                <>
                    <ForecastOrReport>
                        <ForcastButton forecastOrReport={forecastOrReport} onClick={() => setForecastOReport('forcast')}>Forcast</ForcastButton>
                        <ReportButton forecastOrReport={forecastOrReport} onClick={() => {setForecastOReport('report')}}>Report</ReportButton>
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
        </Wrapper>
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
const Wrapper = styled.div`
border: 3px solid purple;
margin-top: 10%;
width: 100%;
height: 100%;
`