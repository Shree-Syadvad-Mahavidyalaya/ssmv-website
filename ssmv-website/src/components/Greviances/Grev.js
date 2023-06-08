import React from 'react'
import './Grev.css'

export default function Grev() {
  return (
    <form>
    <div class="container_grev">
    <div class="title">Greviances Form</div>
    <div class="content">
      <form action="#">
        <div class="user-details">
          <div class="input-box2">
            <span class="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required/>
          </div>
          <div class="input-box2">
            <span class="details">Address</span>
            <input type="text" placeholder="Address" required/>
          </div>
          <div class="input-box3">
            <span class="details">Grievance</span>
            <input type="text" placeholder="Type Here" required/>
          </div>
        </div>
        <div class="button">
          <input type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  </div>
  </form>
  )
}