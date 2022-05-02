import React from 'react'
import styled from 'styled-components';

const ButtonStyle = styled.button`
    border-radius: 8px;
    width: 100%;
    height: 40px;
    text-align: center;
    border: none;
    outline: none;
    padding: 10px;
    transition: 0.3s all ease-in-out;
    margin-top: 20px;
    /* width: 50%;
    align-self: end; */

    :hover {
    transform: scale(1.02);
    cursor: pointer;
    }

    &.primary {
        background: #1a0014;
        color: #dbc8da;
        /* border: 1px solid #1a0014; */

    }
    &.secondary {
        background: #dbc8da;
        color: #1a0014;
        /* border: 1px solid #dbc8da; */
    }
    /* &.form_btn {
        width: ;
        height: ;
    } */
`;

export default function Button(props) {
    const {size, variant, children} = props;
    return (
        <ButtonStyle 
            className={variant}
        >
            {children}
        </ButtonStyle>
    )
}
