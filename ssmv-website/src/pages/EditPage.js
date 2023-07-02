import React, { useState } from 'react';
import './EditPage.css'
import {useNavigate, useLocation} from 'react-router-dom';

function EditPage () {
  const navigate=useNavigate();
  const location=useLocation();
  const {title,api,fields,baseUrl,data}=location.state;

  const [subject, setSubject] = useState(data);
  
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
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(subject)
        })
          .then(response => {
            if (response.ok) {
              // Handle the successful response here
              console.log('Details edited successfully!'+api);
              // Reset the form fields
              setSubject("");
            } else {
              // Handle any error responses from the server
              console.log('Error edited details');
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

export default EditPage;
