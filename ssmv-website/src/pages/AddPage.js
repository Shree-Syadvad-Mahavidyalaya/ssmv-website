import React, { useState } from 'react';
import './EditPage.css'
import {useNavigate, useLocation} from 'react-router-dom';

function AddPage () {
  const navigate=useNavigate();
  const location=useLocation();
  const {title,api,fields,baseUrl}=location.state;
  console.log(api);


  const [subject, setSubject] = useState("");
  
   const handleInputChange = (event) => {
        const { name, value } = event.target;
          setSubject((prevState) => ({
            ...prevState,
            [name]: value,
          }));
    }
      
  
    const handleSubmit = (event) => {
        event.preventDefault();
      
        // Send the alumni data to the server
        fetch(api, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(subject),
          credentials:'include'
        })
          .then(response => {
            if (response.ok) {
              // Handle the successful response here
              console.log('Details added successfully!');
              // Reset the form fields
              setSubject("");
            } else {
              // Handle any error responses from the server
              console.log('Error adding details');
            }
          })
          .catch(error => {
            // Handle any network errors
            console.log('Network error:', error);
          })
          .finally(()=>{
            navigate(baseUrl)
          })
          navigate("/loading");
      };      
    
  return (
    <>
    <h1>{title}</h1>
    <form onSubmit={handleSubmit} className='news-form'>
       {fields.map((field)=>{
        return (
        <div key={field} className="form-group">
            <span>{field}</span>
            <input
            type="text"
            name={field}
            value={subject[field]}
            onChange={handleInputChange}
            required
            />
        </div>)
       })}
      <button type="submit" id='add-news-btn'>Submit</button>
    </form>
    </>
  );
}

export default AddPage;
