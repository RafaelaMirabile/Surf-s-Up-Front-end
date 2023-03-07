import styled from "styled-components"
import waveImg from "../../assets/wave.png"

export default function WaveHeightDirection({ forecasrForDisplay }) {

    return (
        <Content>
            {forecasrForDisplay.map((value, index) => (
                <WaveInfo
                    key={index}
                    heigth={value.waveHeight}
                    direction={value.currentDirection}
                />
            ))}
        </Content>
    )
}

function WaveInfo({ heigth, direction }) {
    return (
        <Information>
            <div>
                <img src={waveImg} />
            </div>
            <Box>
                <div>
                    <p>
                        {heigth}
                    </p>
                    <p>
                        m
                    </p> 
                </div>
                <div>
                    <p>/</p>
                    <p>{direction}</p>
                </div>
            </Box>
        </Information>
    )
}

const Information = styled.div`
border: 2px solid red;
min-width: 10%;
display: flex;
align-items: center;

img{
    height: 70px;
    width: 56px;
}
`
const Content = styled.div`
border: 2px solid purple;
width: 100%;
display: flex;
justify-content: space-evenly;
`
const Box = styled.div`
border: 2px solid orangered;
display: flex;
flex-direction: column;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 500;
font-size: 19.976px;
line-height: 25px;
color: #095e79;

div:nth-child(1){
    display: flex;
    border: 2px solid pink;
}

div:nth-child(2){
    display: flex;
    border: 2px solid black;
    margin-top: 2px;
}
`