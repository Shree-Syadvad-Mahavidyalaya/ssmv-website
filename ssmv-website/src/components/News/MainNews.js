import React from "react";
import "../News/MainNews.css";

const MainNews = (props) => {
  return (
    <div className="newscomponent">
      {/* <div className="news"> */}
        <div className="main-news">
          <img src={props.items.img} alt="" height="400px" width="200px" />
          <div className="main-text">
            <p>{props.items.date}</p>
            <p>
              <b>{props.items.desc}Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</b>
            </p>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default MainNews;
