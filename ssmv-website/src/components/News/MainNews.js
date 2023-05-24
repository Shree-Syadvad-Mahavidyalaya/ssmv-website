import React from "react";
import "../News/MainNews.css";

const MainNews = (props) => {
  return (
    <div className="newscomponent">
      <div className="news">
        <div className="main-news">
          <img src={props.items.img} alt="" width="400px" height="400px" />
          <div className="main-text">
            <p>{props.items.date}</p>
            <p>
              <b>{props.items.desc}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNews;
