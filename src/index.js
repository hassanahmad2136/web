import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginPage from './components/pages/login/login'
import Dashboard from './components/pages/dashboard/dashboard'
import AboutUs from './components/aboutus/aboutus';
import Contact from './components/contactus/contactus';
import Signup from './components/pages/signup/signup';
import Rankings from './components/pages/rankings/rankings';
import Main from './components/pages/main/main';
import BuyingManga from './components/buyingManga/buyingManga';
import UserDashboard from './components/d/dashboard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/Login",
    element : <LoginPage/>,

  },
  {
    path : "/Dashboard",
    element : <Dashboard />, 
  },
  {
    path : "/aboutus",
    element : <AboutUs />, 
  }
  ,
  {
    path : "/contact",
    element : <Contact />, 
  },
  {
    path : "/signup",
    element : <Signup />, 
  }
  ,
  {
    path : "/rankings",
    element : <Rankings />, 
  }
  ,
  {
    path : "/main",
    element : <Main />,
  }
  ,
  {
    path : "/buy",
    element : <BuyingManga />,
  }
  ,
  {
    path : "/dash",
    element : <UserDashboard />,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

