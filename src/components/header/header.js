import React from 'react'
import Logo from './logo_png.png'
import './Header.css'
import AboutUs  from '../aboutus/aboutus';
import {Link} from 'react-router-dom'

const header = () => {
  return (
    <div>

<div class="header">
    {/* <!-- Logo --> */}
        <div class="logo">
            <img id="logo" src={Logo} />
        </div>
    {/* <!-- Other Links --> */}
    <nav>
        <ul>
            <a href="">Home</a>
            <a href="../aboutus">About Us</a>
            <a href="../contact">Contact Us</a>
        </ul>
    </nav>
    {/* <!-- Sign In Button --> */}
    <div class="signInButton">
       
        <button><a href="login.html"><Link to='/Login'> Sign In</Link></a></button>
    </div>
</div>


    </div>
  )
}

export default header