export default function Points({ name, id, setLatitude, setLongitude, latitude, longitude,setSelectedPointName, setSelectedPointId }) {
    return (
        <div onClick={() => { setLatitude(latitude); setLongitude(longitude); setSelectedPointName(name); setSelectedPointId(id) }}>{name}</div>
    );
}