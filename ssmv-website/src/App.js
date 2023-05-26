import { useState } from 'react';
import './App.css';
import Foot from "../src/components/Footer/Foot"
import MainNews from "./components/News/MainNews"
import SideNews from "./components/News/SideNews"
import Courses from "../src/components/Courses/Courses"
import {Route,Switch,Redirect} from 'react-router-dom';
import { Newsnav } from './components/News/Newsnav';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <>
     
    <div className="App">
      <Courses/>
      <Newsnav/>
      <Foot/>
    </div> 
    
    {/* <AboutUs/> */}
    
    </>
  );
}

export default App;
