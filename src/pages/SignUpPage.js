import { useState } from "react"
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postSignUp } from "../services/API";
import logoduck from "../assets/duck-head.png";

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
        <Wrapper>
            <Logo>
                <p>Surf's</p>
                <img
                    src={logoduck}
                />
                <p>Up</p>
            </Logo>
            <Form onSubmit={signUpRequest}>
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
                    placeholder="Senha"
                    type="text"
                    value={form.password}
                    onChange={handleForm}>
                </input>
                {loading ? (
                    <button type="submit">Cadastrar</button>
                ) : (
                    <button disabled={inputState}>
                        <ThreeDots color="#52B6FF" height={20} width={50} />
                    </button>
                )}
                <LinkToLogin to="/signIn">
                    Já é cadastrado? Faça login
                </LinkToLogin>
            </Form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image: linear-gradient(to right top, #095e79, #08708c, #0683a0, #0496b2, #04aac5);
`

const Logo = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 60px;
width: 100%;
p{
    color: #095e79;
    font-family: 'Righteous';
    font-size: 80px;
}
img{
    width: 80px;
    height: 80px;
    margin: 0 5px 0 5px;
}
`
const Form = styled.form`

width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

input{
    margin-bottom: 14px;
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #095e79;
    padding: 10px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
}
button{
    width: 303px;
    height: 45px;
    background: #095e79;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #52B6FF;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
}
`
const LinkToLogin = styled(Link)`
font-family: 'Lexend Deca', sans-serif;
font-size: 14px;
text-decoration: underline;
color: #52B6FF;
`