import React, { useState } from "react";
import "../News/SideNews.css";
import MainNews from "./MainNews";
import { Scrollbars } from "react-custom-scrollbars";
// import Card from './Card'
// import useCollapse from 'react-collapsed';
const Card = (props) => {
  return (
    <div className="cardlist">
      <img src={props.value.img} alt="img" width="100px" height="100px" />
      <div className="text">
        <p className="date">{props.value.date}</p>
        <p className="desc">
          <b>{props.value.desc}</b>
        </p>
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
  ];

  return (
    <>
      <div className="side-news"></div>

      {news.map((item, index) =>
        index === mainNewsId ? <MainNews items={item} /> : null
      )}
      <div className="side-news">
        {news.map((item, index) =>
          index === mainNewsId ? null : (
            <div onClick={() => setMainNewsId(index)}>
              <Card value={item} key={index}></Card>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default SideNews;
