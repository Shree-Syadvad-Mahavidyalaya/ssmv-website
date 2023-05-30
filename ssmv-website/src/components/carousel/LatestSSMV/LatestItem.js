import React from "react";

export default function LatestItem(props) {
  return (
    <div className="card2">
      <div className="body-section">
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      </div>
      <img className="img-section" src={props.url} alt=""/>
    </div>
  );
}