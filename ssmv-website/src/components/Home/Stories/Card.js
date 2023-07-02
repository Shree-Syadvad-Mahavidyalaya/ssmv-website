import React from 'react'
import './SideNews.css'

const Card = (props) => {
  return (
    <div className='news'>
          <div className='Side-news'>
            <div className='news-img-box'><img src={props.items.imageurl} alt=''/></div>
            <div className='text'>
              <p className='date'>{props.items.date}</p>
              <p className='desc'><b>{props.items.desc}</b></p>
            </div>
          </div>

    </div>
  )
}
export default Card;
