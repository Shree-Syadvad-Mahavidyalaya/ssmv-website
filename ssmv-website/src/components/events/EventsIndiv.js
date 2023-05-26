import React from "react";

export default function EventsIndiv(props) {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button>Read More</button>
      </p>
    </div>
  );
}