import React, { useState } from "react";
import "../News/SideNews.css";
import MainNews from "./MainNews";
import Delete from "../CRUD/Delete";
import Update from "../CRUD/Update";
import Create from "../CRUD/Create";
// import { Scrollbars } from "react-custom-scrollbars";
// import Newsnav  from "./Newsnav";
// import Card from './Card'
// import useCollapse from 'react-collapsed';
const Card = (props) => {
  return (
    <div className="cardlist">
      <img src={props.value.img} alt="img" width="100px" height="100px" className="img1"/>
      <div className="text">
        <p className="date">{props.value.date}</p>
        <p className="desc">
         <b className="side-bold">{props.value.desc}</b> 
        </p>
        <Delete/>
        <Update/>
      </div>
    </div>
  );
};

const SideNews = (props) => {
  const [mainNewsId, setMainNewsId] = useState(0);

  const news = [
    {
      img: "https://source.unsplash.com/random/?500x500news",
      date: "24th July 2020",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "https://source.unsplash.com/random/150x150/?news",
      date: "24th July 2001",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "https://source.unsplash.com/random/150x150/?news",
      date: "24th July 2021",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
      img: "https://source.unsplash.com/random/150x150/?news",
      date: "24th July 2022",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "https://source.unsplash.com/random/?500x500news",
      date: "24th July 2020",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "https://source.unsplash.com/random/?500x500news",
      date: "24th July 2020",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "https://source.unsplash.com/random/?500x500news",
      date: "24th July 2020",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "https://source.unsplash.com/random/?500x500news",
      date: "24th July 2020",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
  ];

  return (
    <>
      <div className="side-news" items={news}></div>

      {news.map((item, index) =>
        index === mainNewsId ? <MainNews items={item} /> : null
      )}
      {props.NewsId === "HomeNews"?(
      <div className="side-news"><Create/>
        {news.map((item, index) =>
          index === mainNewsId ? null : (
            <div onClick={() => setMainNewsId(index)}>
              <Card value={item} key={index}></Card>
            </div>
          )
        )}
      </div>): null}
      {props.NewsId === "VideoNews"?(
      <div className="side-news">
        <Create/>
        {news.map((item, index) =>
          index === mainNewsId ? null : (
            <div onClick={() => setMainNewsId(index)}>
              <Card value={item} key={index}></Card>
            </div>
          )
        )}
      </div>): null}
      {props.NewsId === "PlaylistNews"?(
        
      <div className="side-news"><Create/>
        
        {news.map((item, index) =>
          index === mainNewsId ? null : (
            <div onClick={() => setMainNewsId(index)}>
              <Card value={item} key={index}></Card>
            </div>
          )
        )}
      </div>): null}
      {props.NewsId === "CommunityNews"?(
      <div className="side-news"><Create/>
        {news.map((item, index) =>
          index === mainNewsId ? null : (
            <div onClick={() => setMainNewsId(index)}>
              <Card value={item} key={index}></Card>
            </div>
          )
        )}
      </div>): null}
      {props.NewsId === "ChannelNews"?(
      <div className="side-news"> <Create/>
        {news.map((item, index) =>
          index === mainNewsId ? null : (
            <div onClick={() => setMainNewsId(index)}>
              <Card value={item} key={index}></Card>
            </div>
          )
        )}
      </div>): null}
    </>
  );
};

export default SideNews;
