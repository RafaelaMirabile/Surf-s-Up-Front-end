import styled from "styled-components";
import temperatureImg from "../../assets/climate.png"

export default function AirTemperature({ a }) {
    return (
        <Content>
            {a.map((value, index) => (
                <Temperature
                    key={index}
                    temperature={value.airTemperature}
                />
            ))}
        </Content>
    )
}

function Temperature({ temperature }) {
    return (
        <Information>
            <div>
                <img src={temperatureImg} />
            </div>
            <div>
                <p>
                    {temperature}
                </p>
                <p>°C</p>
            </div>
        </Information>

    )
}

const Content = styled.div`
border: 2px solid pink;
width: 100%;
display: flex;
justify-content: space-evenly;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 500;
font-size: 19.976px;
line-height: 25px;
color: #095e79;
`
const Information = styled.div`
border: 2px solid red;
height: 100%;
min-width: 10%;
display: flex;
align-items: center;

div:nth-child(2){
    border: 2px solid black;
    display: flex;
    width: 50%;
    flex-direction: row;
}

p{
    border: 2px solid purple;
    width: 90%;
}

img{
    height: 50px;
}
`