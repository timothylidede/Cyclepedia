import React, { useState } from 'react'
import styled from 'styled-components';
import Button from './Button';

// The object keys below represent the fields we'd like to pass to all form children/grandchildren etc
export const FormContext = React.createContext({
  form: {},
  handleFormChange: () => {}
});

// FORM STYLES
const FormStyle = styled.form`
  width: 80%;
  height: 80%;

  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding-top: 20px;

`;
export default function Form(props) {
    const { children, initialValues, buttonText, formEvent } = props;
    const [form, setForm] = useState(initialValues); // Customoize the state (form field passed to form)

    const handleFormChange = (event) => {
        const { name, value } = event.target; // Get the name and value of the field that caused this change event

        // Update State and Assign new value to the appropriate form field
        const updatedForm = {
            ...form,
            [name]: value
        };
        // console.log('Form changed: ', updatedForm);   
        setForm(updatedForm); // Update state
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        formEvent(form)
    }
    return (
        <FormStyle className="reusableFormWrapper" onSubmit={handleFormSubmit}>
        
            <FormContext.Provider value={{
                form,
                handleFormChange,
            }}>
                {children}
            </FormContext.Provider>

            <Button type="submit" variant="primary" size={"sm"}>{buttonText}</Button>

        </FormStyle>
    )
}
