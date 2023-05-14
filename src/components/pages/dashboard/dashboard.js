import React, { useState} from "react";
import './Dashboard.css'
import {Link} from 'react-router-dom'
import DashboardTopHeader from '../../dashboardTopHeader/dashboardTopHeader'
import DashboardSideBar from '../../dashboardSideBar/dashboardSideBar'
import WeatherImg from './weather_img.png'
import { Doughnut } from 'react-chartjs-2';
import "chart.js/auto";
import {Bar} from 'react-chartjs-2' ;
import {Line} from 'react-chartjs-2';
import { useEffect } from 'react';
import Logo from './logo_png.png';
//import { getUserInfo } from "./api";
//import { getFavorites } from "./api"; // import function that retrieves user favorites from local db
import "./styles.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from 'uuid';

function Example() {
  useEffect(() => {
    document.title = 'Dashboard';
  }, []);
}

const LineOpt ={
    plugins: {
      legend: {
        display: false
      }
    }
  };

const LineDat = 
{
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
    //   label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
}; 

const prodData = 
{
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
       
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};

const prodOpt = 
{
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            },
            grid :
            {
                display : false
            }
        }],
        xAxes : [

            {
                gridLines :
                {
                    display : false 
            
                } 
            }

        ]
    }
};

const cropData =  {
        labels: [ "Maize", "Wheat"],
        datasets: [{
          data: [20, 30, 10],
          backgroundColor: [" #fed401", "rgb(72, 176, 102)", "#faf5f5"],
          borderWidth: 3
        }]
      } ; 

const cropOptions = 
{
    
        cutoutPercentage: 90
      
}      ;

const userInfo = {
    name: 'John Doe',
    age: 28,
    email: 'johndoe@example.com',
    address: '123 Main St, Anytown USA'
  };
// api.js

export async function getUserInfo() {
    // Mock implementation - replace this with actual database calls in your project
    const userInfo = {
      currentReading: [
        { id: 1, title: "Naruto" },
        { id: 2, title: "One Piece" },
        { id: 3, title: "Attack on Titan" }
      ],
      boughtMangas: [
        { id: 4, title: "Death Note" },
        { id: 5, title: "Fullmetal Alchemist" },
        { id: 6, title: "Bleach" }
      ]
    };
  
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(userInfo);
      }, 1000);
    });
  }
  
  function UserInfoPage() {
    const [userInfo, setUserInfo] = useState(null);
  
    useEffect(() => {
      async function fetchUserInfo() {
        const user = await getUserInfo(); // fetch user info from local db
        setUserInfo(user);
      }
      fetchUserInfo();
    }, []);
  
    if (!userInfo) {
      return <div>Loading...</div>;
    }
}

const initialFavorites = [
  {
    id: uuidv4(),
    name: 'Item 1',
    description: 'Description for Item 1',
  },
  {
    id: uuidv4(),
    name: 'Item 2',
    description: 'Description for Item 2',
  },
];

function getFavorites() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const favoritesData = [
          {
            id: 1,
            image: "https://example.com/image1.jpg",
            title: "Favorite 1",
            description: "This is my first favorite",
          },
          {
            id: 2,
            image: "https://example.com/image2.jpg",
            title: "Favorite 2",
            description: "This is my second favorite",
          },
          {
            id: 3,
            image: "https://example.com/image3.jpg",
            title: "Favorite 3",
            description: "This is my third favorite",
          },
        ];
        resolve(favoritesData);
      }, 1000);
    });
  }
  

function FavoritesPage() {
    const [favorites, setFavorites] = useState([]);
  
    useEffect(() => {
      async function fetchFavorites() {
        const favoritesData = await getFavorites(); // fetch user favorites from local db
        setFavorites(favoritesData);
      }
      fetchFavorites();
    }, []);
}

const dashboard = () => {
  return (
    
    <div className='dashboardBody' onLoad={Example()}>
        <DashboardTopHeader />
        <DashboardSideBar/>

        <div class="firstCol">

        <div className="user-info-page">

<div className="info-card">

  <div className="info-header">
    <h2>User Info</h2>
  </div>

  <div className="info-content">

    <div className="info-item">
      <h3>Name:</h3>
      <p>{userInfo.name}</p>
    </div>

    <div className="info-item">
      <h3>Age:</h3>
      <p>{userInfo.age}</p>
    </div>

    <div className="info-item">
      <h3>Email:</h3>
      <p>{userInfo.email}</p>
    </div>

    <div className="info-item">
      <h3>Address:</h3>
      <p>{userInfo.address}</p>
    </div>

  </div>

</div>

</div>
        {/* <div class="firstCol-Img">
            <img src={WeatherImg} alt=""/>
        </div>

        <div class="firstCol-TodayWeather">
            <h4 class="firstText">Your Info</h4>
            <div class="firstCol-TodayWeather-DayDate">

                <h4 class="Day">Monday</h4><h4 class="Date">(22th March ,2022)</h4>
            </div>

            <div class="CurrWeather">
                <i class="fa-solid fa-sun"></i>
                <h1>10°C</h1><br/>
                <h3>11.43 hours</h3>
                <h4>(7.19/18.30)</h4>
            </div>
          
            <div class="otherdetailsWeather">
                <i class="fa-solid fa-droplet"> 49%</i>
                <i class="fa-solid fa-wind"> 8m/s</i>
                <i class="fa-solid fa-arrow-down-short-wide"> 1023hPa</i>
            </div>
<hr class="divider"/>
        </div>
        
        <div class="firstCol-WeatherForecast">

            <div class="text1">
                <h3>Weather Forecast</h3>
            </div>

            <div class="text2">
                <h3>24 Hours</h3>
            </div>

            <div class="part2">
                <div class="rightpart">
                    <i class="fa-solid fa-cloud-sun-rain"></i>
                </div>
                <div class="leftpart">
                    <h3>15°C</h3>
                    <h4>2°C</h4><h5>(Night)</h5>

                </div>
            </div>

            <div class="thirdSection">
                <i class="fa-solid fa-droplet"> 49%</i>
                <i class="fa-solid fa-wind"> 8m/s</i>
                <i class="fa-solid fa-arrow-down-short-wide"> 1023hPa</i>
            </div>

        </div> */}
    </div>


    {/* <!-- Second Column  --> */}
    
    <div class="secondCol">
    <div className="user-info-page">
      <div className="info-card">
        <div className="info-header">User Info</div>
        <div className="info-content">
          <div className="info-item">
            <h3>Current Reading</h3>
            <ul>
            {userInfo.currentReading && userInfo.currentReading.map((manga) => (
  <li key={manga.id}>{manga.title}</li>
))}

            </ul>
          </div>
          <div className="info-item">
            <h3>Bought Mangas</h3>
            <ul>
            {userInfo.boughtMangas && userInfo.boughtMangas.map((manga) => (
  <li key={manga.id}>{manga.title}</li>
))}

            </ul>
          </div>
        </div>
      </div>
    </div>

        </div>
   


   

    
    <div class="thirdCol">
    <div className="favorites-page">
      <h1>My Favorites</h1>
      <TransitionGroup>
        {/* {favorites.map((favorite) => (
          <CSSTransition key={favorite.id} classNames="fade" timeout={300}>
            <li className="favorite-item">
              <img src={favorite.image} alt={favorite.title} />
              <h3>{favorite.title}</h3>
              <p>{favorite.description}</p>
            </li>
          </CSSTransition>
        ))} */}
      </TransitionGroup>
    </div>

       

    </div>

    

</div>

  )
}

export default dashboard