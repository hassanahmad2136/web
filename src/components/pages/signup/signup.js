import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import './signup.css'
import Logo from './logo_png.png'
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupText, setSignupText] = useState(''); 
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  function handleSignup() {
    if (password !== confirmPassword) {
      setSignupText('Passwords do not match');
      return;
    }

    axios.post('http://localhost:5000/server/signup', {
      username: username, 
      password: password,
    }).then((response) => {
      if (response.data === 'USER_CREATED') {
        console.log("Signup Successful"); 
        document.getElementById("signupStatus").style.display = "block";
        document.getElementById("signupStatus").style.backgroundColor = "rgb(51, 215, 152)";
        setSignupText("Signup Successful");
        localStorage.setItem("email", username);
        setTimeout(() => { navigate("/Dashboard"); }, 1500);
      } else {
        document.getElementById("signupStatus").style.display = "block";
        console.log("Signup Failed")
        setSignupText("Signup Failed");
      }     
    });
    console.log(username);
    console.log(password);
  };

  function handleTogglePasswordVisibility() {
    setPasswordVisible(!passwordVisible);
  }

  function handleToggleConfirmPasswordVisibility() {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  }

  return (
    <div className='SignupPage'>
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
        <h1>Join the Adventure <i className="fa-solid fa-feather-alt"></i></h1>
        <div className="signupForm">
          <label htmlFor=""><span>Email</span></label><br/>
          <input className="frm" type="text" value={username} onChange={e => setUsername(e.target.value)}/><br/>
          <label htmlFor=""><span>Password</span></label><br/>
          <div className="passwordInput">
            <input type={passwordVisible ? 'text' : 'password'} className="frm" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleTogglePasswordVisibility}>{passwordVisible ? 'Hide' : 'Show'}</button>
          </div>
          <br/>
          <label htmlFor=""><span>Confirm Password</span></label><br/>
          <div className="passwordInput">
            <input type={confirmPasswordVisible ? 'text' : 'password'} className="frm" value={confirmPassword} onChange={e => setConfirmPassword(e .target.value)} />
            <button onClick={handleToggleConfirmPasswordVisibility}>{confirmPasswordVisible ? 'Hide' : 'Show'}</button>
          </div>
          <br/>
          <button className="signupButton" onClick={handleSignup}>Sign Up</button>
          <p id="signupStatus" className="signupStatus">{signupText}</p>
          <p className="loginRedirect">Already have an account? <Link to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
