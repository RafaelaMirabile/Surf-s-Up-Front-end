import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import UserContext from "../../contexts/userContext.js";
import { postReport } from "../../services/API.js";
import StokedLevel from "./StokedLevel.js";

export default function RegisterReport({ selectedPointId, setReload, setAddReport, reload }) {
    const [form, setForm] = useState({
        report: ""
    });
    const [loading, setLoading] = useState(true);
    const [stokedLevel, setStokedLevel] = useState(0);
    const { userInfos } = useContext(UserContext);

    const levelOfStokedArray = [
        {
            id: 1,
            stokedLevel: 'Tá flat bro'
        },
        {
            id: 2,
            stokedLevel: 'Dá pra brincar'
        },
        {
            id: 3,
            stokedLevel: 'Corre pra água'
        }
    ];

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function reportRequest(e) {
        e.preventDefault();
        const stoked = levelOfStokedArray.filter(level => level.id === stokedLevel).map(value => value.stokedLevel);
        const body = {
            user_name: userInfos.name,
            report: form.report,
            stoked_level: stoked[0]
        };

        postReport(selectedPointId, body).then((response) => {
            console.log(response.data);
            setAddReport(false);
            setReload(!reload);
        }).catch((error) => {
            console.log(error);
        })

    }

    return (
        <Wrapper>
            <StokedLevel
                setStokedLevel={setStokedLevel}
                stokedLevel={stokedLevel}
                levelOfStokedArray={levelOfStokedArray}
            />
            <Form onSubmit={reportRequest}>
                <input
                    required
                    type="text"
                    name="report"
                    value={form.name}
                    placeholder="eai, como estão as ondas bro?"
                    onChange={handleForm}
                ></input>
                {loading ? (
                    <button type='submit' onClick={reportRequest}>Enviar</button>
                )
                    : (
                        <button>
                            <ThreeDots color="#FFFFFF" height={20} width={50} />
                        </button>
                    )
                }
            </Form>
        </Wrapper>
    )
}
const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 10px;
border: 3px dashed #68D2DF;
max-height: 180px;
border-radius: 10%;
`
const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

input{
    margin: 10px 0px 10px 0px;
    width: 100%;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 300;
    font-size: 19.976px;
    line-height: 25px;
    color: #095e79;
    padding: 10px;
}
button{
width: 50%;
background: #095e79;
border-radius: 4.63636px;
color: #68D2DF;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 700;
line-height: 26px;
text-align: center;
color: #52B6FF;
border: none;
display: flex;
justify-content: center;
align-items: center;
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
background-color: #095e79;
}
`