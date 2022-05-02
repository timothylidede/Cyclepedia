import React from 'react'
import styled from 'styled-components';
import  { Link } from 'react-router-dom'
import { Home } from '@mui/icons-material';

const FormFooterStyle = styled.div`
  margin: 20px 0;
  width: 85%;
  height: 50px;
  padding: 10px 0;
  color: black;
  display: flex;

  p{
  width: 55%;

  }
  a{
  color: #1a0014;
      
  }
  .back_home_div {
  width: 45%;
}
  .back_home_div a {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.back_home_div a svg {
  margin-right: 10px;
}
`;

export default function FormFooter(props) {

    const {text, url = "/", urlText} = props;

    return (
        <FormFooterStyle>
            <p>{text}
                <Link to={url}> {urlText}</Link>
            </p>
            <div className="back_home_div">
                <Link to="/"><Home/>Back Home</Link>
            </div>                
        </FormFooterStyle>
    )
}
