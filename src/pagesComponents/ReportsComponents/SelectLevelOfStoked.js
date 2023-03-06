import styled from "styled-components"
import logoduck from "../../assets/duck-head.png";

export default function SelectLevelOfStoked({ id, level, setStokedLevel, stokedLevel }) {
    
    function ducks() {
        if (id === 1) {
            return (
                <div>
                    <img src={logoduck} />
                </div>
            )
        } else if (id === 2) {
            return (
                <div>
                    <img src={logoduck} />
                    <img src={logoduck} />
                </div>
            )
        } else {
            return (
                <div>
                    <img src={logoduck} />
                    <img src={logoduck} />
                    <img src={logoduck} />
                </div>
            )
        }
    }
    const quantityOfDucks = ducks();
    return (
        <Stoked stoked={stokedLevel === id} onClick={() => { setStokedLevel(id) }}>
            <div>
                {level}
            </div>
            <div>{quantityOfDucks}</div>
        </Stoked>
    );
}


const Stoked = styled.div`
width: 30%;
max-height: 75px;
background: #095e79;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 700;
line-height: 26px;
text-align: center;
color: #52B6FF;
border: ${({ stoked }) => stoked ? '3px solid #44ABF7' : 'none'};
box-shadow:${({ stoked }) => stoked ? 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px' : ''} ;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
margin-right: 10px;


img{
    height: 24px;
}
`
