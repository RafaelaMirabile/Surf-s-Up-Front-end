import Forecast from "./Forecast.js"
import Points from "./Points.js"
import Reports from "./Reports.js";
import { useContext, useEffect, useState } from "react"
import styled from "styled-components";
import { getPoints } from "../../services/API.js";
import PointsContext from "../../contexts/pointsContext.js";

export default function PointsList() {
    const [pointList, setPointsList] = useState([]);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [selectedPointName, setSelectedPointName] = useState('');
    const [selectedPointId, setSelectedPointId] = useState(0);
    const [forecastOrReport, setForecastOReport] = useState('forcast');
    const { showList, setShowList } = useContext(PointsContext);

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
                    <PointName>
                        <p>
                            {selectedPointName}
                        </p>
                    </PointName>
                    <ForecastOrReport>
                        <ForcastButton forecastOrReport={forecastOrReport} onClick={() => setForecastOReport('forcast')}>Forcast</ForcastButton>
                        <ReportButton forecastOrReport={forecastOrReport} onClick={() => { setForecastOReport('report') }}>Report</ReportButton>
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
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 16px 0px 10px 0px;
`
const ForcastButton = styled.div`
width: 50%;
background: #095e79;
border-radius: 4.63636px;
color: #68D2DF;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 700;
line-height: 26px;
text-align: center;
color: #52B6FF;
border: none;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 10px;
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
background-color: ${props => props.forecastOrReport === 'forcast' ? '#095e79' : '#5b818a'};
`
const ReportButton = styled.div`
width: 50%;
background: #095e79;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 700;
line-height: 26px;
text-align: center;
color: #52B6FF;
border: none;
display: flex;
justify-content: center;
align-items: center;
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
background-color: ${props => props.forecastOrReport === 'forcast' ? '#5b818a' : '#095e79'};
`
const Wrapper = styled.div`
border: 2px solid purple;
width: 100%;
height: 100vh;
padding: 24px;
`
const PointName = styled.div`
border-bottom: 1px dashed #68D2DF;
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