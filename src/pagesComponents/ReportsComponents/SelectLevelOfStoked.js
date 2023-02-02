import styled from "styled-components"

export default function SelectLevelOfStoked({ id, level, setStokedLevel, stokedLevel }) {

    return (
        <Stoked stoked={stokedLevel === id} onClick={() => { setStokedLevel(id) }}>
            {level}
        </Stoked>
    );
}

const Stoked = styled.div`
border: 2px solid green;
background-color: ${({ stoked }) => stoked ? 'green' : 'white'};
`