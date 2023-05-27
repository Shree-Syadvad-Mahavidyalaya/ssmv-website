/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useState } from "react";
import SideNews from './SideNews';
import './Newsnav.css';
import 'react-multi-carousel/lib/styles.css';

const Newsnav = () => {
    
    const [NewsId, setNewsId] = useState("HomeNews");
    return (
    <div>
        <nav className = 'navnews'>
          <div className='div-underline'>
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>
          </div>
            <a onClick={() => setNewsId("HomeNews")} id="home">Home</a>
            <a onClick={() => setNewsId("VideoNews")}>Videos</a>
            <a onClick={() => setNewsId("PlaylistNews")}>Playlists</a>&nbsp;&nbsp;
            <a onClick={() => setNewsId("CommunityNews")}>Community</a>&nbsp;&nbsp;
            <a onClick={() => setNewsId("ChannelNews")}>Channels</a>
        </nav>
        <div className='NewsSection'>
        <SideNews NewsId={NewsId}/>
        </div>
    </div>
  )
};

export default Newsnav;
