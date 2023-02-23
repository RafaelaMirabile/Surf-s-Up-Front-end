import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { deleteReport } from "../../services/API.js"



export default function Report({ comment, userName, stokedLevel, id, setReload, reload }) {
    const navigate = useNavigate();
    
    function deleteReportRequest(id) {
        const user = JSON.parse(localStorage.getItem("surfsup"));

        if (!user) {
            alert("Faca login para comentar bro!");
            navigate('/signIn');
        } else {
            deleteReport(id).then((response) => {
                console.log(response.data);
                setReload(!reload);
            }).catch((error) => {
                console.log(error);
            });
        };
    }

    return (
        <ReportDiv>
            <div>{comment}</div>
            <ion-icon onClick={() => deleteReportRequest(id)} name="trash-outline"></ion-icon>
        </ReportDiv>
    )
}

const ReportDiv = styled.div`
border: 2px solid red;
display: flex;
justify-content: space-between;

ion-icon{
    font-size: 24px;
    color: black;
}
`