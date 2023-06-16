import React from 'react';
import Delete from '../../CRUD/Delete/Delete';
import Update from '../../CRUD/Update/Update';

export default function ASTIndiv(props) {
  return (
    <div className='card1' >
      <div className='alumni-card'>
      <img className='alumni-img' src={props.url} alt=''/>
        <p>{props.name}</p>
        <hr></hr>
        <p>{props.designation}</p>
      </div>
      <div className='alumni-about'><p>{props.description}</p>
      <Delete/><Update/>
      </div>
    </div>
  )
};