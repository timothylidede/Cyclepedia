import styled from 'styled-components';
import bg from '../../assets/signinbg.png';
import logo from '../../assets/logo.png';
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import React from 'react';

const Container = styled.div`
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image:url(${bg});
      background-size: cover;
`

const Image = styled.img`
      width: 70%;
`

const Wrapper = styled.div`
      position: relative;
      padding: 20px;
      width: 30%;
      height: 67%;
      background-color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
`

const Title = styled.h1`
      margin-top: 40px;
      font-size: 24px;
      color: #605f5f;
      font-family: "Roboto Regular", sans-serif;
      font-weight: 600;
`

const Hr = styled.hr`
      margin: 10px 0px 25px 0px;
      justify-content: center;
`

const Form = styled.form`
      width: 90%;
      position: relative;
      display: flex;
      flex-direction: column;
`

const Label = styled.label`
      margin-left: 25px;
      color: #504f4f;
      font-family: "Roboto Bold", sans-serif;

`
const Input = styled.input`
      flex: 1;
      min-width: 40%;
      margin: 10px 0 20px 0;
      padding: 15px 15px 15px 40px;
      border-radius: 5px;
      border: 1.5px solid lightgray;
      background-color: #efecec;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 17px;
`
const Action = styled.div`
      flex-direction: column; 
      display: flex;
      width: 100%;
      align-items: center;
`

const Button = styled.button`
      width: 40%;
      border: none;
      padding: 15px 5px;
      background-color: teal;
      color: white;
      cursor: pointer;
      margin-top: 50px;
      margin-bottom: 10px;
      border-radius: 55px;
      font-weight: 700;
      font-size: 24px;
`

const Message = styled.div`
      margin-top: 20px;
      font-family: "Roboto Thin",sans-serif;
      color: #494949;
`

const NavLink = styled(Link)`
      margin: 5px 0;
      font-size: 15px;
      text-decoration: underline;
      cursor: pointer;
      color: #fd7b48;
      font-family: "Roboto Thin", sans-serif;
`
const Span = styled.span`
      color: red;
      font-weight: bold;
`

const Login = () => {
      let navigate = useNavigate();

      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [error, setError] = useState("");

      // useEffect(() => {
      //       if(localStorage.getItem("authToken")){
      //             navigate("/");
      //       }
      // }, [navigate]);

      const loginHandler = async (e) => {
            e.preventDefault();

            const config = {
                  header: {
                        "Content-Type": "application/json"
                  },
            };



            try{
                  const { data } = await axios.post(
                        "api/auth/login",
                        {
                              email,
                              password
                        },
                        config
                  );

                  localStorage.setItem("authToken", data.token)

                  navigate("/");
            }catch(error){
                  setError(error.response.data.error);
                  setTimeout(() => {
                        setError("");
                  }, 5000);
            }
      };

    return (
        <Container>
            <Wrapper>
                <Image src={logo}/>
                <Title>Sign In</Title>

                {error && <Span>{error}</Span>}

                <Form onSubmit={loginHandler}>
                    <Hr/>
                    <Label>Email*</Label>
                    <Input 
                    type="email"
                    required
                    id="email"
                    placeholder="example@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    ></Input>
                    <Label>Password*</Label>
                    <Input 
                    type="password"
                    requiredid="password"
                    autoComplete="true"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}

                    ></Input>
                    <Action>
                        <Button>SIGN IN</Button>
                        <Message>Don't have an account? <NavLink to="/signup"><b>Create Account</b></NavLink></Message>
                    </Action>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Login;
