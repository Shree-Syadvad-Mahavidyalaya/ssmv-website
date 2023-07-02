import React from 'react';
import './Admn.css'

const AdmnForm = () => {
  return (
    <form>
    <div class="container_1">
    <div class="title">Admission Form</div>
    <div class="content">
      <form action="#">
        <div class="user-details">
          <div class="input-box">
            <span class="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required/>
          </div>
          <div class="input-box">
            <span class="details">Father Name</span>
            <input type="text" placeholder="Father Name" required/>
          </div>
          <div class="input-box">
            <span class="details">Mother Name</span>
            <input type="text" placeholder="Mother Name" required/>
          </div>
          <div class="input-box">
            <span class="details">Date Of Birth</span>
            <input type="text" placeholder="Date Of Birth" required/>
          </div>
          <div class="input-box">
            <span class="details">Class</span>
            <input type="text" placeholder="Class" required/>
          </div>
          <div class="input-box">
            <span class="details">Board Name</span>
            <input type="text" placeholder="Board Name" required/>
          </div>
          <div class="input-box">
            <span class="details">Father's Occupation</span>
            <input type="text" placeholder="Occupation" required/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" placeholder="Phone Number" required/>
          </div>
          <div class="input-box">
            <span class="details">Home Address</span>
            <input type="text" placeholder="Home Address" required/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" placeholder="Phone Number" required/>
          </div>
        </div>
        <div class="button">
          <input type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  </div>
  </form>
  );
}

export default AdmnForm;