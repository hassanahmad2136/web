import React from 'react'
import './Dashboard.css'

const UserDashboard = () => {
  return (
    <div className="user-dashboard-container">

      {/* Column 1: Favorites */}
      <div className="column favorites">
        <h2>Favorites</h2>
        <ul>
          <li>Manga Title 1</li>
          <li>Manga Title 2</li>
          <li>Manga Title 3</li>
        </ul>
      </div>

      {/* Column 2: User Info */}
      <div className="column user-info">
        <h2>User Info</h2>
        <p>Username: JohnDoe123</p>
        <p>Email: johndoe@example.com</p>
        <p>Country: United States</p>
      </div>

      {/* Column 3: Current Reading Info and Favorites List */}
      <div className="column current-reading">
        <h2>Current Reading</h2>
        <ul>
          <li>Manga Title 4 (Chapter 10)</li>
          <li>Manga Title 5 (Chapter 5)</li>
        </ul>

        <h2>Favorites</h2>
        <ul>
          <li>Manga Title 1</li>
          <li>Manga Title 2</li>
          <li>Manga Title 3</li>
        </ul>
      </div>

    </div>
  )
}

export default UserDashboard;
