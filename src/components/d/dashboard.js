import React from 'react'
import './Dashboard.css'
import { useEffect, useState } from "react";

const UserDashboard = () => {
  console.log("HELOO");
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const fetchData = async () => {
    const email = "example@example.com";
    
    try {
      const response = await fetch(`http://localhost:3000/dash?email=${email}`);
      const data = await response.json();
      
      setUserData(data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  }
  
  useEffect(() => {
    fetchData();
  }, []);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-dashboard-container">
      {/* Column 1: Favorites */}
      <div className="column favorites">
        <h2>Favorites</h2>
        <ul>
          {userData.favorites.map((favorite, index) => (
            <li key={index}>{favorite}</li>
          ))}
        </ul>
      </div>

      {/* Column 2: User Info */}
      <div className="column user-info">
        <h2>User Info</h2>
        <p>Username: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>

      {/* Column 3: Current Reading Info and Favorites List */}
      <div className="column current-reading">
        <h2>Current Reading</h2>
        <ul>
          {userData.current_reading.map((reading, index) => (
            <li key={index}>{reading}</li>
          ))}
        </ul>

        <h2>Favorites</h2>
        <ul>
          {userData.favorites.map((favorite, index) => (
            <li key={index}>{favorite}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
