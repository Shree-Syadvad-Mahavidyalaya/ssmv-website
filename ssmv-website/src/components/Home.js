import React from 'react'
import Courses from './Courses/Courses'
import { Newsnav } from './News/Newsnav'
import Foot from './Footer/Foot'

const Home = () => {
  return (
    <div>
        <div className="Home">
      <Courses/>
      <Newsnav/>
      <Foot/>
    </div> 
    </div>
  )
}

export default Home