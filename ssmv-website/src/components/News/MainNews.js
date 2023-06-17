import React from "react";
import "../News/MainNews.css";
import Delete from "../CRUD/Delete/Delete";
import Update from "../CRUD/Update/Update";

const MainNews = (props) => {
  return (
    <div className="newscomponent">
      {/* <div className="news"> */}
        <div className="main-news" >
          <img src={props.items.imagesurl} alt=""  height="400px" className="main-img" />
          <div className="main-text" >
            <p className="main-date">{props.items.date}</p>
            <p className="main-desc">
              <b>{props.items.desc}Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</b>
            </p>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default MainNews;
