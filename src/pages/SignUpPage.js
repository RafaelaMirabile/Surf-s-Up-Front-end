import { useState } from "react"
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { postSignUp } from "../services/API";

export default function SignUp() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(true);
    const [inputState, setInputState] = useState(false);
    const navigate = useNavigate();

    function signUpRequest(e) {
        e.preventDefault();
        setInputState(true);
        setLoading(false);

        postSignUp(form).then((response) => {
            console.log(response.data);
            localStorage.setItem(
                "sufsup",
                JSON.stringify({
                    id: response.data.id,
                    name: response.data.name,
                    token: response.data.token
                })
            );
            setInputState(false);
            setLoading(true);
            setForm({
                name: "",
                email: "",
                password: ""
            });
            navigate('/signIn');
        }).catch((error) => {
            console.log(error);
            setForm({
                name: "",
                email: "",
                password: ""
            });
            setInputState(false);
            setLoading(true);
        });
    }

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <form onSubmit={signUpRequest}>
                <input
                    required
                    disabled={inputState}
                    name="name"
                    type="text"
                    placeholder="User name"
                    value={form.name}
                    onChange={handleForm}
                ></input>
                <input
                    required
                    disabled={inputState}
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={handleForm}
                >
                </input>
                <input
                    required
                    disabled={inputState}
                    name="password"
                    placeholder="senha"
                    type="text"
                    value={form.password}
                    onChange={handleForm}>
                </input>
                {loading ? (
                    <button type="submit">Cadastrar</button>
                ) : (
                    <button disabled={inputState}>
                        <ThreeDots color="#FFFFFF" height={20} width={50} />
                    </button>
                )}
                <Link to="/signIn">
                    Já é cadastrado? Faça login
                </Link>
            </form>
        </>
    )
}