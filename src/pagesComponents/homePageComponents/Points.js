import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { favRequest } from "../../services/API";

export default function Points({ name, id, setLatitude, setLongitude, latitude, longitude, setSelectedPointName, setSelectedPointId }) {
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
            <div onClick={() => { setLatitude(latitude); setLongitude(longitude); setSelectedPointName(name); setSelectedPointId(id) }}>{name}</div>
            <ion-icon onClick={() => { addToFav(id) }} name="star-outline"></ion-icon>
        </Point>
    );
}

const Point = styled.div`
border: 2px solid red;
display: flex;
justify-content: space-between;

ion-icon{
    font-size: 24px;
}
`