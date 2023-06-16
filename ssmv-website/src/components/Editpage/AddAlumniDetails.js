import React, { useState } from 'react';
import './AddNewsForm.css'
import {useNavigate} from 'react-router-dom';

function AddAlumniDetails() {
  const navigate=useNavigate();
  const [subject, setSubject] = useState({ 
    description: '', 
    imagesurl: '' , 
    name:'', 
    profile:'' });
  
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "image") {
          setSubject((prevState) => ({
            ...prevState,
            imagesurl: value,
          }));
        } else {
          setSubject((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
      };
      
  
      const handleSubmit = (event) => {
        event.preventDefault();
      
        // Create a new alumni object using the form data
        const alumni = {
          description: subject.description,
          imagesurl: subject.imagesurl,
          name: subject.name,
          profile: subject.profile
        };
        console.log(alumni);
      
        // Send the alumni data to the server
        fetch('https://test-moid.vercel.app/ssmv/alumni/spotlight/new', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(alumni)
        })
          .then(response => {
            if (response.ok) {
              // Handle the successful response here
              console.log('Alumni details added successfully!');
              // Reset the form fields
              setSubject({
                description: '',
                imagesurl: '',
                name: '',
                profile: ''
              });
            } else {
              // Handle any error responses from the server
              console.log('Error adding alumni details');
            }
          })
          .catch(error => {
            // Handle any network errors
            console.log('Network error:', error);
          });
          navigate('/Alumni')
      };      
    
  return (
    <>
    <h1>Add Details</h1>
    <form onSubmit={handleSubmit} className='news-form'>
    <div className="form-group">
        <span>Name:</span>
        <input
          type="name"
          name="name"
          value={subject.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <span>Profile:</span>
        <input
          type="name"
          name="profile"
          value={subject.profile}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <span>Image Url:</span>
        <input
          type="text"
          name="image"
          value={subject.imagesurl}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <span>Description:</span>
        <textarea
          name="description"
          value={subject.description}
          onChange={handleInputChange}
          rows="6"
          required
        />
      </div>
      <button type="submit" id='add-news-btn'>Submit</button>
    </form>
    </>
  );
}

export default AddAlumniDetails;
