import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { favRequest } from "../../services/API";

export default function Points({ name, id, setLatitude, setLongitude, latitude, longitude, setSelectedPointName, setSelectedPointId, setShowList }) {
    const navigate = useNavigate();

    function addToFav(id) {
        const user = JSON.parse(localStorage.getItem("surfsup"));
        if (!user) {
            alert("Faca login para favoritar bro!");
            navigate('/signIn');
        } else {
            favRequest(id).then((reponse) => {
                console.log(reponse.data)
            }).catch((error) => {
                console.log(error)
            })
        };
    }

    return (
        <Point>
            <div onClick={() => {
                setLatitude(latitude);
                setLongitude(longitude);
                setSelectedPointName(name);
                setSelectedPointId(id);
                setShowList(1)
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