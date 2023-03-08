import { useContext } from "react";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner"
import { Link } from "react-router-dom";
import styled from "styled-components"
import UserContext from "../contexts/userContext.js";
import Header from "../pagesComponents/header/Header.js"
import Sidebar from "../pagesComponents/header/Sidebar.js"

export default function CadastroPoint() {
    const [inputState, setInputState] = useState(false);
    const [form, setForm] = useState({
        name: "",
        latitude: "",
        longitude:""
    });
    const [loading, setLoading] = useState(true);
    const { setUserInfos } = useContext(UserContext);
    
    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }
    
    function registerPointRequest(e) {
        e.preventDefault();
        setInputState(true);
        setLoading(false);

       /* postSignIn(form).then((response) => {
            navigate('/');
            setInputState(false);
            setLoading(true);
            setForm({
                name: "",
                latitude: "",
                longitude:""
            });
        }).catch((error) => {
            console.log(error);
            setForm({
                name: "",
                latitude: "",
                longitude:""
            })
            setInputState(false);
            setLoading(true);
        });*/
    }
    
    return (
        <Container>
            <Header/>
            <Sidebar/>
            <Wrapper>
                <Form onSubmit={registerPointRequest}>

                    <input
                        disabled={inputState}
                        required
                        type="text"
                        placeholder="Nome do Pico"
                        value={form.name}
                        onChange={handleForm}
                        name="name"
                    ></input>
                    <input
                        disabled={inputState}
                        required
                        type="text"
                        name="latitude"
                        placeholder="Latitude"
                        value={form.latitude}
                        onChange={handleForm}
                    ></input>
                    <input
                        disabled={inputState}
                        required
                        type="text"
                        name="longitude"
                        placeholder="Longitude"
                        value={form.longitude}
                        onChange={handleForm}
                    ></input>
                    {loading ? (
                        <button type="submit">Registrar</button>
                    ) : (
                        <button disabled={inputState}>
                            <ThreeDots color="#52B6FF" height={20} width={50} />
                        </button>
                    )
                    }
                </Form>
            </Wrapper>
        </Container>
    )
}
const Container = styled.div`
border:  2px solid green;
width: 100vw;
height: 100vh;
margin-top: 40px;
background-color: #4F90A0;
`
const Wrapper = styled.div`
border: 2px solid purple;
overflow-y: auto;
width: 100%;
height: 100vh;
padding: 24px;
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