import logo from './logo.svg';
import './App.css';

import React from 'react';
import  { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from "./components/Authentication/Login";
import SignUp from './components/Authentication/SignUp';
import AuthWrapper from './components/Authentication/AuthWrapper';

function App() {
  return (
    <BrowserRouter>
      <section className="main_app_root">
        <Routes>
          <Route path="/login" element={<AuthWrapper children={<Login/>}/>}/>
          <Route path="/signup" element={<AuthWrapper children={<SignUp/>}/>}/>
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
