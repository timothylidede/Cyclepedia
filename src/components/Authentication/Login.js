import React from 'react'
// import { Link, useHistory } from 'react-router-dom'
// COMPONENTSs
import FormInput from '../ReusableComponets/FormInput';
import Form from '../ReusableComponets/Form';
import './Auth.css'


// REDUX
// import { connect } from "react-redux";
// import { loginUser } from "../../actions/authActions";
import Button from '../ReusableComponets/Button';
import FormFooter from '../ReusableComponets/FormFooter';


const Login = () => {
    // TO PASS PROPS TO THE LOGIN FORM
    const initialValues = {
        email: '',
        password: '',
    };

    // ------ CHANGE INTO A DISPATCH ACTION --------- 
    const handleLogin = (form) => {
        console.log("Submitted, Login User: ", form)
    }
    return (
        <section className="login_section">
            <h2>Log In to Cyclepedia</h2>
            <Form formEvent={handleLogin} initialValues={initialValues} buttonText={"Log In"}>
                <FormInput 
                    label={"Email:"} type={"email"} name={"email"} placeholder={""}
                />
                <FormInput 
                    label={"Password:"} type={"password"} name={"password"} password=""
                />  
            </Form>
                <FormFooter text={"Are you a new user?"} url={"/signup"} urlText={"Sign Up"} />   

        </section>
    )
}



export default Login;