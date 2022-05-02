import React, { useState, useContext } from 'react'
import { FormContext } from './Form';
import styled from 'styled-components';

const FormInputStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    height: 40px;
    .form_labels {
        width: 30%;
        height: 100%;
        display: flex;
        align-items: center;
        font-weight:bold;
    }
    .form_inputs {
        padding: 5px;
        border-radius: 8px;
        outline: none;
        border: 1px solid rgba(26, 0, 20, 0.2);
        width: 70%;
        height: 100%;
    }
`;

export default function FormInput(props) {

    // HANDLE PROPS
    const { label, type = 'text', name, placeholder } = props; //set default as text

    const formContext = useContext(FormContext);
    const { form, handleFormChange } = formContext;

    return (
        <FormInputStyle>
            <label className="form_labels">{label}</label>
            <input 
                type={type}
                name={name} 
                placeholder={placeholder}
                value={form[name]}
                className="form_inputs" 
                onChange={handleFormChange}  
            />        
        </FormInputStyle>
    )
}
