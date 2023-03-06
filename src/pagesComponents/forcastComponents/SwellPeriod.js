import styled from "styled-components"
import arrow from "../../assets/arrow.png"

export default function SwellPeriod({ a }) {

    return (
        <Content>
            {a.map((value, index) => (
                <Period
                    key={index}
                    period={value.swellPeriod}
                />
            ))}
        </Content>
    )
}

function Period({ period }) {
    return (
        <Information>
            <Box>
                <div>
                    <p>
                        {period}
                    </p>
                    <p>
                        s
                    </p>
                </div>
                <img src={arrow} />
            </Box>
        </Information>
    )

}
const Content = styled.div`
border: 2px solid purple;
width: 100%;
display: flex;
justify-content: space-evenly;
height: 60px;
`

const Information = styled.div`
border: 2px solid red;
min-width: 10%;
display: flex;
justify-content: center;
align-items: center;
padding: 0px 60px 0px 60px;
`

const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 500;
font-size: 19.976px;
line-height: 25px;
color: #095e79;
position: relative;
img{
        width: 54px;
        position: absolute;
    }
div:nth-child(2){
    border: 2px solid black;
    
}
div:nth-child(1){
    border: 2px solid pink;
    display: flex;
    width: 50px;
    position: relative;
    justify-content: center;
}
`