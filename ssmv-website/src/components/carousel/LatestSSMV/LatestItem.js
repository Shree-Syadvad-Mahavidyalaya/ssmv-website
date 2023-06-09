import React from "react";
import Delete from "../../CRUD/Delete/Delete"
import Update from "../../CRUD/Update/Update"

export default function LatestItem(props) {
  return (
    <div className="card2">
      <div className="body-section">
        <h3>{props.title}</h3>
        <p>{props.body}</p>
        <Delete/><Update/>
      </div>
      <img className="img-section" src={props.url} alt=""/>
    </div>
  );
}