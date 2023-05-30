import React from 'react';

export default function ASTIndiv(props) {
  return (
    <div className='card1' >
        <img className='alumni-img' src={props.url} alt=''/>
        <p>{props.name}</p>
        <hr></hr>
        <p>{props.designation}</p>
    </div>
  )
};
