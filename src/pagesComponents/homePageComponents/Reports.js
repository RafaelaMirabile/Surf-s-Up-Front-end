import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../contexts/userContext.js";
import { getReports } from "../../services/API.js";
import RegisterReport from "../ReportsComponents/RegisterReport.js";
import Report from "../ReportsComponents/Report.js";

export default function Reports({ selectedPointName, selectedPointId }) {
    
    const [reports, setReports] = useState([]);
    const [addReport, setAddReport] = useState(false);
    const [reload, setReload] = useState(false);
    const navigate = useNavigate();
    const { setUserInfos } = useContext(UserContext);

    useEffect(() => {
        getReports(selectedPointId).then((response) => {
            console.log(response.data);
            setReports(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, [reload]);

    function checkUser() {
        const user = JSON.parse(localStorage.getItem("surfsup"));
        if (addReport === false) {
            if (!user) {
                setAddReport(false);
                alert("Faca login para comentar bro!");
                navigate('/signIn');
            } else {
                setAddReport(true);
                setUserInfos({
                    id: user.id,
                    name: user.name
                });
            }
        } else {
            setAddReport(false);
        };
    }

    return (
        <>
            {reports.length === 0 ?
                <>
                    <AddReport onClick={checkUser}>{addReport ? <AddReportButton>-</AddReportButton> : <AddReportButton>+</AddReportButton>}</AddReport>
                    {addReport ?
                        <RegisterReport
                            setAddReport={setAddReport}
                            selectedPointId={selectedPointId}
                            setReload={setReload}
                            reload={reload}
                        />
                        : ''}
                    <NoReportsDiv>Não ha reports deste pico ainda</NoReportsDiv>
                </>
                :
                <>
                    <AddReport onClick={checkUser}>{addReport ? <AddReportButton>-</AddReportButton> : <AddReportButton>+</AddReportButton>}</AddReport>
                    {addReport ?
                        <RegisterReport
                            setAddReport={setAddReport}
                            selectedPointId={selectedPointId}
                            setReload={setReload}
                            reload={reload}
                        />
                        : ''}
                    {reports.map((report, index) => (
                        <Report
                            key={index}
                            id={report.id}
                            comment={report.report}
                            userName={report.userName}
                            stokedLevel={report.stokedLevel}
                            setReload={setReload}
                            reload={reload}
                        />
                    ))}
                </>
            }
        </>
    )
}

const AddReport = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const AddReportButton= styled.div`
width: 36px;
height: 36px;
border: 3px dashed #68D2DF;
border-radius: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #095e79;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 700;
line-height: 26px;
margin: 16px 0px 16px 0px;
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`
const NoReportsDiv= styled.div`
font-family: 'Lexend Deca';
font-style: italic;
font-weight: 700;
line-height: 26px;
color: #5D6D71;
margin-top: 40px;
width: 100%;
height: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`