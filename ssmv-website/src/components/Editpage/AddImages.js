import React,{useState} from 'react';
import './AddNewsForm.css'
import { useNavigate} from 'react-router-dom';

export default function AddImages() {
    const navigate=useNavigate();
    const [subject, setSubject] = useState({ 
        imagesurl: '' ,
        description:''
      });
    
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
        
          // Create a new object using the form data
          const addedData = {
            imagesurl: subject.imagesurl,
            description: subject.description,
          };
          console.log(addedData);
        
          // Send the alumni data to the server
          fetch('https://test-moid.vercel.app/ssmv/gallery/new', {
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
                    imagesurl: '' ,
                    description:''
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
            navigate('/ViewAll/Gallery')
        };      
      
    return (
      <>
      <h1>Add Details</h1>
      <form onSubmit={handleSubmit} className='news-form'>
        <div className="form-group">
          <span>Image Url</span>
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
