/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from 'react';
import './AddNewsForm.css'
import { useNavigate, useLocation } from 'react-router-dom';

function EditFounder({ FounderId }) {
  const navigate = useNavigate();
  // const location = useLocation();
  // const AdminId = location.state.props;
  const [founder, setFounder] = useState({
    name: '',
    designation: '',
    description: '',
    image:''
  });

  useEffect(() => {
    fetchFounder();
  }, []);

  const fetchFounder = async () => {
    try {
      const response = await fetch(
        `https://test-moid.vercel.app/ssmv/aboutus/founder/${FounderId}/`
      );
      const data = await response.json();
  
      if (response.ok) {
        const founderData = data.founder[0]; // Access the first object in the `founder` array
        setFounder({
          name: founderData.name,
          designation: founderData.designation,
          description: founderData.description,
          image: founderData.image
        });
      } else {
        console.error('Failed to fetch administration data');
        // Handle errors or display error messages
      }
    } catch (error) {
      console.error('Error fetching administration data:', error);
      // Handle errors or display error messages
    }
  };
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFounder((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const onCancelEdit=()=>{
    navigate('/About Us/Founder');
  }
  
  const handleEdit = async (event) => {
    event.preventDefault();
    const updatedData = founder; // No need to wrap `administration` in an object
  
    try {
      const response = await fetch(
        `https://test-moid.vercel.app/ssmv/aboutus/founder/${FounderId}/`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ founder: [updatedData] }) // Use 'founder' instead of 'collegeadministration'
        }
      );
  
      if (response.ok) {
        console.log('Administration updated successfully');
        // Handle any further actions or notifications after successful update
      } else {
        console.error('Failed to update administration');
        // Handle errors or display error messages
      }
    } catch (error) {
      console.error('Error updating administration:', error);
      // Handle errors or display error messages
    }
    navigate('/About Us/Founder');
  };
  

  return (
    <>
      <h1>Edit Founder</h1>
      <form className="news-form" onSubmit={handleEdit}>
        <div className="form-group">
          <span>Name:</span>
          <input
            type="text"
            name="name"
            value={founder.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <span>Designation:</span>
          <input
            type="text"
            name="designation"
            value={founder.designation}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <span>Image url:</span>
          <input
            type="text"
            name="image"
            value={founder.image}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <span>Description:</span>
          <textarea
            name="description"
            value={founder.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" id="add-news-btn" onClick={onCancelEdit}>
          Edit
        </button>
      </form>
    </>
  );
}

export default EditFounder;


