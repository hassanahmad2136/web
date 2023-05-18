import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import './Login.css'
import Logo from './logo_png.png'
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userType, setUserType] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginText, setLoginText] = useState('');
  const handleLogin = () => {
    fetch(`http://localhost:3000/login?username=${username}&password=${password}&userType=${userType}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Invalid username or password');
        }
        return response.json();
      })
      .then(data => {
        try {
          setLoginText(data.message);
        } catch (error) {
          console.error(error);
          setLoginText('Error during login. Please try again later.');
        }
      })
      .catch(error => {
        console.error(error);
        setLoginText(error.message);
      });
  };



  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  }; return (
    <div className='LoginPage'>
      <div className="leftSection">
        <h3 className="bkMain"><i className="fa-solid fa-arrow-left"></i><a href="landingPage.html"><Link to='/'> Back to Main Screen</Link></a></h3>
        <div className="leftInnerBox">
          <div className="innerBox">
            <h1>"Unleash your imagination and explore a diverse range of manga genres on our platform - your gateway to a world of endless possibilities!"</h1>
          </div>
        </div>
      </div>
      <div className="rightSection">
        <img src={Logo} alt="" />
        <h1>Welcome Back <i className="fa-solid fa-face-smile"></i></h1>
        <div className="loginForm">
          <label htmlFor=""><span>Email</span></label><br />
          <input className="frm" type="text" value={username} onChange={e => setUsername(e.target.value)} /><br />
          <label htmlFor=""><span>Password</span></label><br />
          <div className="passwordInput">
            <input type={passwordVisible ? 'text' : 'password'} className="frm" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleTogglePasswordVisibility}>{passwordVisible ? 'Hide Password' : 'Show Password'}</button>
          </div>
          <br />
          <div className="loginthird">
            <input type="radio" id="html" name="userType" value="user" checked={userType === 'user'} onChange={() => setUserType('user')} />
            <label htmlFor="html">User</label>
            <input type="radio" id="css" name="userType" value="admin" checked={userType === 'admin'} onChange={() => setUserType('admin')} />
            <label htmlFor="css">Admin</label>
          </div>
          <div className="loginsec">
            <br />
            <input type="checkbox" className="rmbrme" />Remember me
            <a>Forgot Password ?</a>
            <br />
          </div>
          <button onClick={handleLogin}><a href="#">Login</a></button>
          <br />
          <br />
          <p id="loginStatus">{loginText}</p>
          <p className="message">Don't have an account? <a href="signup">Sign up</a></p>
        </div>
      </div>
    </div>
  );
}
export default Login