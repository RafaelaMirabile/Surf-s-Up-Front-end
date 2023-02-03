import axios from "axios";

const URL_BASE = "http://localhost:5000";

function createHeader() {
    const user = JSON.parse(localStorage.getItem("surfsup"));
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        },
    };
    return config;
}

async function getPoints() {
    const points = `${URL_BASE}`;
    return await axios.get(points);
};

async function getForecast(body) {
    const params = 'waveHeight,airTemperature,currentDirection,windDirection,swellPeriod,windSpeed'
    return await axios.get(`https://api.stormglass.io/v2/weather/point?lat=${body.latitude}&lng=${body.longitude}&params=${params}`, {
        headers: {
            'Authorization': 'f5f848e0-96d0-11ed-a138-0242ac130002-f5f84994-96d0-11ed-a138-0242ac130002'
        }
    });
}

async function postSignIn(body) {
    const signIn = `${URL_BASE}/signIn`;
    return await axios.post(signIn, body);
};

async function postSignUp(body) {
    const signUp = `${URL_BASE}/signUp`;
    return await axios.post(signUp, body);
};

async function getReports(pointId) {
    const reports = `${URL_BASE}/${pointId}`
    return await axios.get(reports);
}

async function postReport(pointId, body) {
    const report = `${URL_BASE}/${pointId}`;
    return await axios.post(report, body, createHeader());
}

async function deleteReport(reportId) {
    const report = `${URL_BASE}/${reportId}`;
    return await axios.delete(report, createHeader());
}
export {
    getPoints,
    getForecast,
    getReports,
    postSignIn,
    postSignUp,
    postReport,
    deleteReport
}