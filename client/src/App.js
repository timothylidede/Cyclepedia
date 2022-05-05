import logo from './logo.svg';
import './App.css';
import PrivateRoute from './components/routing/PrivateRoute';

import React from 'react';
import  { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* Use PrivateRoute for routes to pages you want accessed only by logged in users */}
          {/* <PrivateRoute path="/" component={component} /> */} 
          <Route path="login" element={ <Login/> }/>
          <Route path="signup" element={ <Register/> }/>
          <Route path="/" element={ <Home/> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
