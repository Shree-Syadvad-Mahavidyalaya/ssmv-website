/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useState } from "react";
import SideNews from './SideNews';
import '../News/Newsnav.css';

const Newsnav = () => {
    
    const [NewsId, setNewsId] = useState("HomeNews");
    return (
    <div>
      
        <nav className='navnews'>
          <div className='div-underline'>
          </div>
            <a href="#" className='atag' onClick={() => setNewsId("HomeNews")} >Home</a>
            <a href="#" className='atag' onClick={() => setNewsId("VideoNews")}>Videos</a>
            <a href="#" className='atag' onClick={() => setNewsId("PlaylistNews")}>Playlists</a>&nbsp;&nbsp;
            <a href="#" className='atag' onClick={() => setNewsId("CommunityNews")}>Community</a>&nbsp;&nbsp;
            <a href="#" className='atag' onClick={() => setNewsId("ChannelNews")}>Channels</a>
        </nav>
        
        
        <div className='NewsSection'>
        <SideNews NewsId={NewsId} width='700px'/>
        </div>
    </div>
  )
};

export default Newsnav;
