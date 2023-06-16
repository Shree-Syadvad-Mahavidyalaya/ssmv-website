import React, { useState } from 'react';
import './AddNewsForm.css'
import {useNavigate} from 'react-router-dom';

function AddAlumniVGallery() {
  const navigate=useNavigate();
  const [subject, setSubject] = useState({ 
    videolink: '' 
    });
  
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "video") {
          setSubject((prevState) => ({
            ...prevState,
            videolink: value,
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
      
        // Create a new object using the form data
        const addedData = {
          videolink: subject.videolink,
        };
        console.log(addedData);
      
        // Send the alumni data to the server
        fetch('https://test-moid.vercel.app/ssmv/alumni/videoGallery/new', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(addedData)
        })
          .then(response => {
            if (response.ok) {
              // Handle the successful response here
              console.log('Details added successfully!');
              // Reset the form fields
              setSubject({
                videolink: '' 
              });
            } else {
              // Handle any error responses from the server
              console.log('Error adding details');
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
        <span>Video Link:</span>
        <input
          type="text"
          name="video"
          value={subject.videolink}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" id='add-news-btn'>Submit</button>
    </form>
    </>
  );
}

export default AddAlumniVGallery;
