import React, {useState} from 'react'

// COMPONENTSs
import FormInput from '../ReusableComponets/FormInput';
import Form from '../ReusableComponets/Form';
import { useNavigate } from "react-router-dom";
import FormFooter from '../ReusableComponets/FormFooter';


export default function SignUp() {
      // TO PASS PROPS TO THE LOGIN FORM
    const navigate = useNavigate()

    const initialValues = {
        fullname: '',
        email: '',
        password: '',
        phonenumber: '',
    };
    // ------ CHANGE INTO A DISPATCH ACTION --------- 
    async function registerUser(form){
        const response = await fetch('http://localhost:6969/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                form
            }),
        })

        const data = await response.json()

        if(data.status === 'ok'){
            navigate('/login')
        }else{
            //handle status 500
        }
    }
    const handleSignUp = (form) => {
        console.log("Submitted, Signed Up, User: ", form)
        registerUser(form)        
    }
  return (
    <section className="signup_section">
        <h2>Sign Up for Cyclepedia</h2>
        <Form formEvent={handleSignUp} initialValues={initialValues} buttonText={"Sign Up"}>
            <FormInput 
                label={"Full Name:"} type={"text"} name={"fullname"}
            />
            <FormInput 
                label={"Phone Number:"} type={"number"} name={"phonenumber"}
            />            
            <FormInput 
                label={"Email:"} type={"email"} name={"email"}
            />
            <FormInput 
                label={"Password:"} type={"password"} name={"password"} password=""
            />     
        </Form>
        <FormFooter text={"Already have an account?"} url={"/login"} urlText={"Log In"} />   
    </section>
  )
}
