import React, { useState } from 'react';
import './AddNewsForm.css'
import { useLocation ,useNavigate} from 'react-router-dom';

function EditSHostelinfo() {
  const navigate=useNavigate();
  const [subject, setSubject] = useState({description:''});
  const location=useLocation();
  const subjectId = location.state.props;
  console.log(useLocation());

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSubject((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEdit = async (event) => {
    event.preventDefault();
  
    const updatedData = subject;
    console.log(updatedData)
  
    try {
      const response = await fetch(
        `https://test-moid.vercel.app/ssmv/services/hostel/${subjectId}/`,
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
    navigate('/Services/Hostel');
  };
  
  return (
    <>
    <h1>Edit Details</h1>
    <form onSubmit={handleEdit} className='news-form'>
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

export default EditSHostelinfo;
