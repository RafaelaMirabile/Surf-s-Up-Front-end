import styled from "styled-components"
import waveIcon from "../../assets/wave-lines.png"

export default function SelectLevelOfStoked({ id, level, setStokedLevel, stokedLevel }) {
    
    function waves() {
        if (id === 1) {
            return (
                <div>
                    <img src={waveIcon} />
                </div>
            )
        } else if (id === 2) {
            return (
                <div>
                    <img src={waveIcon} />
                    <img src={waveIcon} />
                </div>
            )
        } else {
            return (
                <div>
                    <img src={waveIcon} />
                    <img src={waveIcon} />
                    <img src={waveIcon} />
                </div>
            )
        }
    }
    const qauntityOfWaves = waves();
    return (
        <Stoked stoked={stokedLevel === id} onClick={() => { setStokedLevel(id) }}>
            <div>
                {level}
            </div>
            <div>{qauntityOfWaves}</div>
        </Stoked>
    );
}


const Stoked = styled.div`
background-color:#095e79 ;
width: 30%;
background: #095e79;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 700;
line-height: 26px;
text-align: center;
color: #52B6FF;
border: none;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-right: 10px;
box-shadow: ${({ stoked }) => stoked ? ' 0px -1px 20px 4px rgba(104,210,223,1)' : ''};

img{
    height: 20px;
}
`