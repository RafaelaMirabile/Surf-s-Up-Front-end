import styled from "styled-components"
import { useContext } from "react"
import PointsContext from "../../contexts/pointsContext"
import logoduck from "../../assets/duck-head.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const { setShowList } = useContext(PointsContext);
    const navigate = useNavigate();
    return (
        <HeaderContainer>
           <Logo onClick={() => { setShowList(0); navigate('/') }}>
               <p>Surf's</p>
               <img
                   src={logoduck}
               />
               <p>Up</p>
           </Logo>
        </HeaderContainer>
    )
}
const HeaderContainer = styled.header`
width: 100%;
height: 40px;
background-color: #4F90A0;
display: flex;
justify-content: center;
align-items:center;
position: fixed;
z-index: 1000;
top: 0%;
right: 0%;
`
const Logo = styled.div`
display: flex;
p{
    color: #095E79;
    font-family: 'Righteous';
    font-size: 30px;
}
img{
    width: 30px;
    height: 30px;
    margin: 0 5px 0 5px;
}
`