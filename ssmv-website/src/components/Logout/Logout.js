import React from 'react'
import './Logout.css'

export default function Logout() {
  return (
    <div className='logout-container'>
      <h1>Logout Successfully</h1>
      <p>You are now logged out</p>
      <button id='logout-page-btn'><a href='/ssmv-website'>Go to home page</a></button>
    </div>
  )
}

