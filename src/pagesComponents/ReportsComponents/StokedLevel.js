import styled from "styled-components"
import SelectLevelOfStoked from "./SelectLevelOfStoked.js"

export default function StokedLevel({ setStokedLevel,stokedLevel, levelOfStokedArray }) {

    return (
        <Wrapper>
            {levelOfStokedArray.map((level, index) => (
                <SelectLevelOfStoked
                    key={index}
                    id={level.id}
                    level={level.stokedLevel}
                    setStokedLevel={setStokedLevel}
                    stokedLevel={stokedLevel}
                />
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
display:flex;
justify-content: space-between;
`