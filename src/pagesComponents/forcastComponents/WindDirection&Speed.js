import styled from "styled-components"
import windImg from "../../assets/wind.png"

export default function WindDirectionSpeed({ a }) {

    return (
        <Content>
            {a.map((value, index) => (
                <WaveInfo
                    key={index}
                    speed={value.windSpeed}
                    direction={value.windDirection}
                />
            ))}
        </Content>
    )
}

function WaveInfo({ speed, direction }) {
    return (
        <Information>
            <Box>
                <div>
                    <p>{speed}</p>
                    <p>Km/h</p>
                </div>
                <div>
                    <img src={windImg} />
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
justify-content: center;
align-items: center;
padding: 0px 60px 0px 60px;
img{
    height: 40px;
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
    border: 2px solid pink;
    display: flex;
    p{
        margin-right: 6px;
    }
}


div:nth-child(2){
    display: flex;
    border: 2px solid black;
    margin-top: 2px;
    justify-content: center;
    align-items: center;
    
    p{
        border: 2px solid purple;
        margin-left: 8px;
    }
}
`