import { useContext, useState } from "react"
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../contexts/userContext";
import { postSignIn } from "../services/API";

export default function SignIn() {
    const [form, setForm] = useState({
        name: "",
        password: ""
    });
    const [inputState, setInputState] = useState(false);
    const [loading, setLoading] = useState(true);
    const { setUserInfos } = useContext(UserContext);
    const navigate = useNavigate();

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }
    function signInRequest(e) {
        e.preventDefault();
        setInputState(true);
        setLoading(false);
        console.log(form);

        postSignIn(form).then((response) => {
            localStorage.setItem(
                "surfsup",
                JSON.stringify({
                    id: response.data.id,
                    name: response.data.user,
                    token: response.data.token
                })
            );
            setUserInfos({
                id: response.data.id,
                name: response.data.user
            })
            navigate('/');
            setInputState(false);
            setLoading(true);
            setForm({
                name: "",
                email: "",
                password: ""
            });
        }).catch((error) => {
            console.log(error);
            setForm({
                name: "",
                email: "",
                password: ""
            })
            setInputState(false);
            setLoading(true);
        });
    }
    return (
        <>
            <form onSubmit={signInRequest}>
                <input
                    disabled={inputState}
                    required
                    type="text"
                    placeholder="user Name"
                    value={form.name}
                    onChange={handleForm}
                    name="name"
                ></input>
                <input
                    disabled={inputState}
                    required
                    type="password"
                    name="password"
                    placeholder="password"
                    value={form.password}
                    onChange={handleForm}
                ></input>
                {loading ? (
                    <button type="submit">Entrar</button>
                ) : (
                    <button disabled={inputState}>
                        <ThreeDots color="#FFFFFF" height={20} width={50} />
                    </button>
                )
                }
                <Link to="/signUp">
                    Primeira vez ? Se inscreva!
                </Link>
            </form>
        </>
    )
};