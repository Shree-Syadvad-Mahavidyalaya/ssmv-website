import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className='testimonials'>
    <h2>Testimonials</h2>
    <div id='body-containers'>
        <div className='boxes1'></div>
        <div className='test-Body'>
            <div className='img-test'><img src=' ' alt=''/></div>
            <div className='cont-body-test'>
                <i class="fa-solid fa-quote-left fa-5x color-blue"></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum ex</p>
            </div>
        </div>
        <div className='boxes2'></div>
    </div>
    </div>
  )
}

export default Testimonials
