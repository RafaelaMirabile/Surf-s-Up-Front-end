import styled from "styled-components";
import Header from "../pagesComponents/header/Header.js";
import PointsList from "../pagesComponents/homePageComponents/PointsList.js"


export default function HomePage() {
    return (
        <Container>
            <Header/>
            <PointsList/>
        </Container>
    )
}
const Container = styled.div`
border:  2px solid green;
width: 100vw;
height: 100vh;
`