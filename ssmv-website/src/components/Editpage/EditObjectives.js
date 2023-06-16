/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from 'react';
import './AddNewsForm.css'
import { useNavigate, useLocation } from 'react-router-dom';

function EditObjective( ) {
  const navigate = useNavigate();
  const location = useLocation();
  const ObjectiveId = location.state.props;
  const [objective, setObjective] = useState({
    description: ''
  });
console.log(useLocation());
  useEffect(() => {
    fetchObjective();
  }, []);

  const fetchObjective = async () => {
    try {
        
      const response = await fetch(
        `https://test-moid.vercel.app/ssmv/aboutus/objectives/${ObjectiveId}`
      );
      const data = await response.json();
  
      if (response.ok) {
        const objectiveData = data.objective; // Access the first object in the `founder` array
        setObjective({
          description: objectiveData.description
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
    setObjective((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEdit = async (event) => {
    event.preventDefault();
    const updatedData = objective; // No need to wrap `administration` in an object
    console.log(updatedData);
    try {
        
      const response = await fetch(
        `https://test-moid.vercel.app/ssmv/aboutus/objectives/${ObjectiveId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify( updatedData) // Use 'founder' instead of 'collegeadministration'
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
    navigate('/About Us/Objectives');
  };
  

  return (
    <>
      <h1>Edit Objective</h1>
      <form className="news-form" onSubmit={handleEdit}>
        <div className="form-group">
          <span>Description:</span>
          <textarea
            name="description"
            value={objective.description}
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

export default EditObjective


