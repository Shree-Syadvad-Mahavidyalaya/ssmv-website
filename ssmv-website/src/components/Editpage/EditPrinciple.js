/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './AddNewsForm.css'
import { useNavigate, useLocation } from 'react-router-dom';

function EditPrinciple() {
  const navigate = useNavigate();
  const location = useLocation();
  const PrincipleId = location.state.props;
  const [principle, setPrinciple] = useState({
    name: '',
    designation: '',
    description: '',
    image:''
  });

  useEffect(() => {
    fetchPrinciple();
  }, []);

  const fetchPrinciple = async () => {
    try {
      const response = await fetch(
        `https://test-moid.vercel.app/ssmv/aboutus/principle/${PrincipleId}`
      );
      const data = await response.json();
  
      if (response.ok) {
        const principleData = data.principle[0]; // Access the first object in the `founder` array
        setPrinciple({
          name: principleData.name,
          designation: principleData.designation,
          description: principleData.description,
          image: principleData.image
        });
      } else {
        console.error('Failed to fetch Principle data');
        // Handle errors or display error messages
      }
    } catch (error) {
      console.error('Error fetching principle data:', error);
      // Handle errors or display error messages
    }
  };
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPrinciple((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  

  
  
  const handleEdit = async (event) => {
    event.preventDefault();
    const updatedData = principle; // No need to wrap `administration` in an object
    console.log(updatedData);
    try {
      
      const response = await fetch(
        `https://test-moid.vercel.app/ssmv/aboutus/principle/${PrincipleId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify( updatedData ) // Use 'founder' instead of 'collegeadministration'
        }
      );
  
      if (response.ok) {
        console.log('Principle updated successfully');
        // Handle any further actions or notifications after successful update
      } else {
        console.error('Failed to update principle');
        // Handle errors or display error messages
      }
    } catch (error) {
      console.error('Error updating principle:', error);
      // Handle errors or display error messages
    }
    navigate('/About Us/Principle');
  };
  

  return (
    <>
      <h1>Edit Principle</h1>
      <form className="news-form" onSubmit={handleEdit}>
        <div className="form-group">
          <span>Name:</span>
          <input
            type="text"
            name="name"
            value={principle.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <span>Designation:</span>
          <input
            type="text"
            name="designation"
            value={principle.designation}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <span>Image url:</span>
          <input
            type="text"
            name="image"
            value={principle.image}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <span>Description:</span>
          <textarea
            name="description"
            value={principle.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" id="add-news-btn" >
          Edit
        </button>
      </form>
    </>
  );
}

export default EditPrinciple;


