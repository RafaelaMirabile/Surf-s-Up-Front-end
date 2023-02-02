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
    const navigate = useNavigate();
    const { userInfos, setUserInfos } = useContext(UserContext);

    useEffect(() => {
        getReports(selectedPointId).then((response) => {
            console.log(response.data);
            setReports(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    console.log(reports);
    console.log(addReport);

    function checkUser() {
        const user = JSON.parse(localStorage.getItem("surfsup"));
        if (addReport === false) {
            if (!user) {
                setAddReport(false);
                alert("Faca login para comentar bro!");
                navigate('signIn');
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

    function addReportDiv() {
        return (
            <>
                <AddReport onClick={checkUser}>{addReport ? <>-</> : <>+</>}</AddReport>
                {addReport ?
                    <RegisterReport
                        setAddReport={setAddReport}
                        selectedPointId={selectedPointId}
                    />
                    : ''}
                {reports.map((report, index) => (
                    <Report
                        key={index}
                        comment={report.report}
                        userName={report.userName}
                        stokedLevel={report.stokedLevel}
                    />
                ))}
            </>
        )
    }

    const reportDiv = addReportDiv();
    return (
        <>
            <div>{selectedPointName}</div>
            {reports.length === 0 ?
                <>
                    {reportDiv}
                    <>NAO HA REPORTS NESSE PICO AINDA </>
                </>
                :
                { reportDiv }
            }
        </>
    )
}

const AddReport = styled.div`
border: 2px solid orange;
`