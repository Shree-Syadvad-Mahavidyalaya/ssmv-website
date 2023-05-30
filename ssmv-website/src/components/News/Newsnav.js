import React from 'react'
import { useState } from "react";
import SideNews from './SideNews';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import '../News/Newsnav.css';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Newsnav = () => {
    
    const [NewsId, setNewsId] = useState("HomeNews");
    return (
    <div>
      
        <nav>
          <div className='div-underline'>
          </div>
            <a href="#" className='atag' onClick={() => setNewsId("HomeNews")} >Home</a>
            <a href="#" className='atag' onClick={() => setNewsId("VideoNews")}>Videos</a>
            <a href="#" className='atag' onClick={() => setNewsId("PlaylistNews")}>Playlists</a>&nbsp;&nbsp;
            <a href="#" className='atag' onClick={() => setNewsId("CommunityNews")}>Community</a>&nbsp;&nbsp;
            <a href="#" className='atag' onClick={() => setNewsId("ChannelNews")}>Channels</a>
        </nav>
        {/* <nav>
    <ul>
      <li class="item"><a href="#">link 1</a></li>
      <li class="item"><a href="#">link 2</a></li>
      <li class="item"><a href="#">link 3</a></li>
      <li class="item"><a href="#">link 4</a></li>
      <li class="item"><a href="#">link 5</a></li>
    </ul>
  </nav> */}
        
        <div className='NewsSection'>
        <SideNews NewsId={NewsId}/>
        </div>
    </div>
  )
}

