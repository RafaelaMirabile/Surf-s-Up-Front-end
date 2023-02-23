import styled from "styled-components"
import Sidebar from "./Sidebar"
import logoduck from "../../assets/duck-head.png"

export default function Header() {
    return (
        <HeaderContainer>
            <Sidebar/>
            <Logo>
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
height: 6%;
background-color: #6B838A;
`

const Logo = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
width: 100%;
height: 5%;
margin-top: 1%;
position: fixed;

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