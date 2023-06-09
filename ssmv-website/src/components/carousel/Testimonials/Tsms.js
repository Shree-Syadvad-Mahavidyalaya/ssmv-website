import React from 'react'
import Delete from "../../CRUD/Delete/Delete"
import Update from "../../CRUD/Update/Update"

export default function Tsms(props) {
  return (
    <div id='body-containers'>
        <div className='boxes1'></div>
        <div className='test-Body'>
            <img className='img-test' src={props.url} alt=''/>
            <div className='cont-body-test'>
                <i class="fa-solid fa-quote-left fa-3x"></i>
                <p>{props.para}</p><Delete/><Update/>
            </div>
        </div>
        <div className='boxes2'></div>
    </div>
  )
}