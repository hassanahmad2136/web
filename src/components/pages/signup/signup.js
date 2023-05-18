import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import './signup.css'
import Logo from './logo_png.png'
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [signupText, setSignupText] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('Email is required');
    } else if (!emailRegex.test(email)) {
      setEmailError('Email is invalid');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (!password) {
      setPasswordError('Password is required');
    } else if (!passwordRegex.test(password)) {
      setPasswordError('Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number');
    } else {
      setPasswordError('');
    }
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (!confirmPassword) {
      setConfirmPasswordError('Confirm password is required');
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSignup = async () => {
    validateEmail(username);
    validatePassword(password);
    validateConfirmPassword(confirmPassword);

    if (!emailError && !passwordError && !confirmPasswordError) {
      // Make a POST request to the /signup endpoint
      const response = await fetch(`http://localhost:3000/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: username, name:'y', password: password }),
      });

      // Parse the response as JSON
      const data = await response.json();

      // Set the signup status text based on the response message
      setSignupText(data.message);
    }
  };

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
        <img src={Logo} alt="" />
        <h1>Join the Adventure <i className="fa-solid fa-feather-alt"></i></h1>
        <div className="signupForm">
          <label htmlFor=""><span>Email</span></label><br />
          <input className="frm" type="text" value={username} onChange={e => setUsername(e.target.value)} /><br />
          <label htmlFor=""><span>Password</span></label><br />
          <div className="passwordInput">
            <input type={passwordVisible ? 'text' : 'password'} className="frm" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleTogglePasswordVisibility}>{passwordVisible ? 'Hide' : 'Show'}</button>
          </div>
          <br />
          <label htmlFor=""><span>Confirm Password</span></label><br />
          <div className="passwordInput">
            <input type={confirmPasswordVisible ? 'text' : 'password'} className="frm" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            <button onClick={handleToggleConfirmPasswordVisibility}>{confirmPasswordVisible ? 'Hide' : 'Show'}</button>
          </div>
          <br />
          <button className="signupButton" onClick={handleSignup}>Sign Up</button>
          <p id="signupStatus" className="signupStatus">{signupText}</p>
          <p className="loginRedirect">Already have an account? <Link to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  );

}
export default Signup

