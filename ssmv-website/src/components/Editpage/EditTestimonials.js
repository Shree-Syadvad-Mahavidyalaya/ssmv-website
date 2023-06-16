import React, { useState } from 'react';
import './AddNewsForm.css'
import { useLocation ,useNavigate} from 'react-router-dom';

function EditTestimonials() {
    const navigate=useNavigate();
    const [subject, setSubject] = useState({ 
        description: '', 
        imagesurl: '' , 
        name:''});
    const location=useLocation();
    const subjectId = location.state.props;
    console.log(useLocation());
  
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
      
  
      const handleEdit = async (event) => {
        event.preventDefault();
      
        const updatedData = subject ;
      
        try {
          const response = await fetch(
            `https://test-moid.vercel.app/ssmv/alumni/testinomials/${subjectId}/`,
            {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedData),
            }
          );
      
          if (response.ok) {
            console.log('Updated successfully');
            // Fetch the updated data from the server
            const updatedSubject = await response.json();
            // Update the state with the updated data
            setSubject(updatedSubject);
          } else {
            console.error('Failed to update');
            // Handle errors or display error messages
          }
        } catch (error) {
          console.error('Error updating:', error);
          // Handle errors or display error messages
        }
        navigate('/Alumni');
      };
      

  return (
    <>
    <h1>Edit</h1>
    <form onSubmit={handleEdit} className='news-form'>
    <div className="form-group">
        <span>Name:</span>
        <input
          type="text"
          name="name"
          value={subject.name}
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
      <button type="submit" id='add-news-btn'>Submit</button>
    </form>
    </>
  );
}

export default EditTestimonials;
