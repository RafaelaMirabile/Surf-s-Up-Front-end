import styled from "styled-components"
import { deleteReport } from "../../services/API.js"



export default function Report({ comment, userName, stokedLevel, id, setReload }) {

    function deleteReportRequest(id){
        deleteReport(id).then((response)=>{
            console.log(response.data);
            setReload(false);
        }).catch((error)=>{
            console.log(error)
        });
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