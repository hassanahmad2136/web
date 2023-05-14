import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import './Login.css'
import Logo from './logo_png.png'
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const [loginText, setLoginText] = useState(''); 
  const [passwordVisible, setPasswordVisible] = useState(false);

  function handleLogin() {
    axios.post('http://localhost:5000/server/login', {
      username: username, 
      password: password,
    }).then((response) => {
      if (response.data === 'VALID') {
        console.log("Login Successful"); 
        document.getElementById("loginStatus").style.display = "block";
        document.getElementById("loginStatus").style.backgroundColor = "rgb(51, 215, 152)";
        setLoginText("Login Successful");
        localStorage.setItem("email", username);
        setTimeout(() => { navigate("/Dashboard"); }, 1500);
      } else {
        document.getElementById("loginStatus").style.display = "block";
        console.log("Login Failed")
        setLoginText("Login Failed");
      }     
    });
    console.log(username);
    console.log(password);
  };

  function handleTogglePasswordVisibility() {
    setPasswordVisible(!passwordVisible);
  }

  return (
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
        <img src={Logo} alt=""/>
        <h1>Welcome Back <i className="fa-solid fa-face-smile"></i></h1>
        <div className="loginForm">
          <label htmlFor=""><span>Email</span></label><br/>
          <input className="frm" type="text" value={username} onChange={e => setUsername(e.target.value)}/><br/>
          <label htmlFor=""><span>Password</span></label><br/>
          <div className="passwordInput">
            <input type={passwordVisible ? 'text' : 'password'} className="frm" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleTogglePasswordVisibility}>{passwordVisible ? 'Hide Password' : 'Show Password'}</button>
          </div>
          <br/>
          <div className="loginthird">
            <input type="radio" id="html" name="fav_language" value="HTML"/>
            <label htmlFor="html">User</label>
            <input type="radio" id="css" name="fav_language" value="CSS" />
            <label htmlFor="css">Admin</label>
          </div>
          <div className="loginsec">
            <br/>
            <input type="checkbox" className="rmbrme"/>Remember me
            <a>Forgot Password ?</a>
            <br/>
          </div>
          <button onClick={handleLogin}><a href="#">Login</a></button>
<br/>
<br/>
<p id="loginStatus">{loginText}</p>
<p className="message">Don't have an account? <a href="signup">Sign up</a></p>
</div>
</div>
</div>
)
}

export default Login
