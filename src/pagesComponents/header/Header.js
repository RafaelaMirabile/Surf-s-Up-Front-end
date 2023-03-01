import styled from "styled-components"
import { useContext } from "react"
import PointsContext from "../../contexts/pointsContext"
import logoduck from "../../assets/duck-head.png";

export default function Header() {
    const { setShowList } = useContext(PointsContext);
    return (
        <HeaderContainer>
           <Logo onClick={() => { setShowList(0) }}>
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
top: 0%;
right: 0%;
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`
const Logo = styled.div`
display: flex;
p{
    color: #68D2DF;
    font-family: 'Righteous';
    font-size: 30px;
}
img{
    width: 30px;
    height: 30px;
    margin: 0 5px 0 5px;
}
`