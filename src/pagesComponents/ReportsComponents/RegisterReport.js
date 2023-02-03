import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../../contexts/userContext.js";
import { postReport } from "../../services/API.js";
import StokedLevel from "./StokedLevel.js";

export default function RegisterReport({ selectedPointId, setReload, setAddReport }) {
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
            stokedLevel: 'Dá pra bincar'
        },
        {
            id: 3,
            stokedLevel: 'Corre pra água!'
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
            setReload(true);
        }).catch((error) => {
            console.log(error);
        })

    }

    return (
        <>
            <StokedLevel
                setStokedLevel={setStokedLevel}
                stokedLevel={stokedLevel}
                levelOfStokedArray={levelOfStokedArray}
            />
            <form onSubmit={reportRequest}>
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
            </form>
        </>
    )
}