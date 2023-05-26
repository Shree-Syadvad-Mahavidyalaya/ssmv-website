import React from "react";
import "../News/MainNews.css";

const MainNews = (props) => {
  return (
    <div className="newscomponent">
      {/* <div className="news"> */}
        <div className="main-news" width="700px">
          <img src={props.items.img} alt="" width="700px" height="400px" />
          <div className="main-text" width="700px">
            <p width="700px">{props.items.date}</p>
            <p width="700px">
              <b>{props.items.desc}Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</b>
            </p>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default MainNews;
