import React, { useState,useEffect } from 'react';
import './AddNewsForm.css'
import course_id from '../../Pages/Courses/BA/BA'
import { useNavigate, useLocation } from 'react-router-dom';

function EditAdministration({ AdminId }) {
  const navigate = useNavigate();
  const location = useLocation();
  // const AdminId = location.state.props;
  const [administration, setAdministration] = useState({
    name: '',
    designation: '',
    description: ''
  });

  useEffect(() => {
    fetchAdministration();
  }, []);

  const fetchAdministration = async () => {
    try {
      const response = await fetch(
        `https://test-moid.vercel.app/ssmv/management/collegeAdministration/${AdminId}`
      );
      const data = await response.json();

      if (response.ok) {
        const administrationData = data.collegeadministration[0];
        setAdministration({
          name: administrationData.name,
          designation: administrationData.designation,
          description: administrationData.description
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
    setAdministration(event.target.value);
  };

  const onCancelEdit=()=>{
    navigate('/Admininstration/CollegeAdministration');
  }
  
  const handleEdit = async (event) => {
    event.preventDefault();
    const updatedData = { administration };

    try {
      const response = await fetch(
        `https://test-moid.vercel.app/ssmv/management/collegeAdministration/${AdminId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ collegeadministration: [administration] })
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
    navigate('/Administration');
  };

  return (
    <>
      <h1>Edit Administration</h1>
      <form className="administration-form" onSubmit={handleEdit}>
        <div className="form-group">
          <span>Name:</span>
          <input
            type="text"
            name="name"
            value={administration.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <span>Designation:</span>
          <input
            type="text"
            name="designation"
            value={administration.designation}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <span>Description:</span>
          <textarea
            name="description"
            value={administration.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" id="edit-administration-btn" onClick={onCancelEdit}>
          Edit
        </button>
      </form>
    </>
  );
}

export default EditAdministration;


