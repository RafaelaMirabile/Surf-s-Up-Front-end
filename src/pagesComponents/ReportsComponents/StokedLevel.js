import SelectLevelOfStoked from "./SelectLevelOfStoked.js"

export default function StokedLevel({ setStokedLevel,stokedLevel, levelOfStokedArray }) {

    return (
        <>
            {levelOfStokedArray.map((level, index) => (
                <SelectLevelOfStoked
                    key={index}
                    id={level.id}
                    level={level.stokedLevel}
                    setStokedLevel={setStokedLevel}
                    stokedLevel={stokedLevel}
                />
            ))}
        </>
    )
}