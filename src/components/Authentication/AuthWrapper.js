import React from 'react'
import { useLocation } from 'react-router-dom';

import './Auth.css'
import Login from './Login';
import SignUp from './SignUp';

export default function AuthWrapper({children}) {
  const location = useLocation();
  console.log(location)
  return (
    <section className="authWrapper_section">
      <div className="leftContainer">
        <img src="images/auth_bg2.jpeg" alt="Background" />
      </div>
      <div className="pagesContainer">
        {children}
      </div>
    </section>
  )
}
