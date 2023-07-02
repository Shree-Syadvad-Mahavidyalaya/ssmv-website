/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useState } from "react";
import SideNews from './SideNews';
import './Newsnav.css';

const Newsnav = (props) => {
    
    const [NewsId, setNewsId] = useState('news');
    return (
    <div>
      
        <nav className='navnews'>
          <div className='div-underline'>
          </div>
            <a href="#"  className='atag' onClick={(e) => {e.preventDefault(); setNewsId('news')}} >News</a>
            <a href="#"  className='atag' onClick={(e) => {e.preventDefault(); setNewsId('latest')}}>Latest</a>
            <a href="#"  className='atag' onClick={(e) => {e.preventDefault(); setNewsId('notice')}}>Notice</a>&nbsp;&nbsp;
            {/* <a href="#"  className='atag' onClick={(e) => {e.preventDefault(); setNewsId("CommunityNews")}}>Community</a>&nbsp;&nbsp;
            <a href="#"  className='atag' onClick={(e) => {e.preventDefault(); setNewsId("ChannelNews")}}>Channels</a> */}
        </nav>

        <div className='NewsSection'>
        <SideNews {...props} NewsId={NewsId} width='700px'/>
        </div>
    </div>
  )
};

export default Newsnav;