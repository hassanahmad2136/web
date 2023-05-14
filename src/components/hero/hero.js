import React from 'react'
import HeroImg from './tractor_no_bg.png'
import './Hero.css'
import {Link} from 'react-router-dom'

const hero = () => {
  return (
    <div>

{/* <!-- Hero Section --> */}
<div class="hero">
    {/* <!-- Left Text --> */}
    <div class="leftSideHero">
        <div class="mainText">
            <h1>Read Latest</h1>
            <h2>Mangas with</h2>
            <h1 id="agro_text">Mangaverse</h1>
        </div>
        <div class="captionText">
            <h3>"Escape reality and dive into a world of captivating stories with our manga collection!" </h3>
        </div>
        <div class="GetStartedButton">
        
            <button><Link to='/Login'> Get Started </Link><i class="fa-solid fa-circle-right"></i></button>
        </div>
    </div>

    <div class="rightSideHero">
        <img src={HeroImg} alt="" />
    </div>

</div>

    </div>
  )
}

export default hero