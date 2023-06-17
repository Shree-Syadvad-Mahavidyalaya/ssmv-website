/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useState } from "react";
import SideNews from './SideNews';
import '../News/Newsnav.css';
import A from '../../A';

const Newsnav = () => {
    
    const [NewsId, setNewsId] = useState("HomeNews");
    return (
    <div>
      
        <nav className='navnews'>
          <div className='div-underline'>
          </div>
            <A href="#" className='atag' onClick={() => setNewsId("HomeNews")} >Home</A>
            <A href="#" className='atag' onClick={() => setNewsId("VideoNews")}>Videos</A>
            <A href="#" className='atag' onClick={() => setNewsId("PlaylistNews")}>Playlists</A>&nbsp;&nbsp;
            <A href="#" className='atag' onClick={() => setNewsId("CommunityNews")}>Community</A>&nbsp;&nbsp;
            <A href="#" className='atag' onClick={() => setNewsId("ChannelNews")}>Channels</A>
        </nav>
        {/* <nav>
    <ul>
      <li class="item"><A href="#">link 1</A></li>
      <li class="item"><A href="#">link 2</A></li>
      <li class="item"><A href="#">link 3</A></li>
      <li class="item"><A href="#">link 4</A></li>
      <li class="item"><A href="#">link 5</A></li>
    </ul>
  </nav> */}
        
        <div className='NewsSection'>
        <SideNews NewsId={NewsId} width='700px'/>
        </div>
    </div>
  )
};

export default Newsnav;
