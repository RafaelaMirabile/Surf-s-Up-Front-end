import { useContext, useState } from "react"
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/userContext";
import { postSignIn } from "../services/API.js";
import logoduck from "../assets/duck-head.png";

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
                password: ""
            });
        }).catch((error) => {
            console.log(error);
            setForm({
                name: "",
                password: ""
            })
            setInputState(false);
            setLoading(true);
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
            <Form onSubmit={signInRequest}>

                    <input
                        disabled={inputState}
                        required
                        type="text"
                        placeholder="User Name"
                        value={form.name}
                        onChange={handleForm}
                        name="name"
                    ></input>
                    <input
                        disabled={inputState}
                        required
                        type="password"
                        name="password"
                        placeholder="Senha"
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
                    <LinkToSignUpPage to="/signUp">
                        Primeira vez ? Se inscreva!
                    </LinkToSignUpPage>
            </Form>
        </Wrapper>
    )
};

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
margin-bottom: 60px;
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
const LinkToSignUpPage = styled(Link)`
font-family: 'Lexend Deca', sans-serif;
font-size: 14px;
text-decoration: underline;
color: #52B6FF;
`