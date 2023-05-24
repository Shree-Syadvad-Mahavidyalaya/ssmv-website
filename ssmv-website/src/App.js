// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Foot from "../src/components/Footer/Foot"
import MainNews from "./components/News/MainNews"
import SideNews from "./components/News/SideNews"
import Courses from "../src/components/Courses/Courses"
import {Route,Switch,Redirect} from 'react-router-dom';


function App() {
  const[showMediaIcons,setShowMediaIcons]=useState(false)
  return (
    <>
    {/* <Switch>
      <Route exact path="/" />{
      <Redirect to="/" />
      }
    </Switch> */}
    <div className="App">
      <Courses/>
      <nav>
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>
          <a onClick={() => {
              setShowMediaIcons(!showMediaIcons);
            }}>Home</a><a onClick="ul(1)">Videos</a>
            <a onClick={() => {
              setShowMediaIcons(!showMediaIcons);
            }}>Playlists</a>
            <a onClick={() => {
              setShowMediaIcons(!showMediaIcons);
            }}>Community</a>
            <a onClick={() => {
              setShowMediaIcons(!showMediaIcons);
            }}>Channels</a>
        </nav>
      <div className='NewsSection'>
      
      <SideNews/>
      </div>
      <Foot/>
    </div>
    </>
  );
}

export default App;
