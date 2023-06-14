import React, { useState,useEffect } from 'react';
import './AddNewsForm.css'
import course_id from '../../Pages/Courses/BA/BA'
import { useNavigate, useLocation } from 'react-router-dom';

function EditManage({ AdminId }) {
  const navigate = useNavigate();
  const location = useLocation();
  // const AdminId = location.state.props;
  const [Management, setManagement] = useState({
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
        `https://test-moid.vercel.app/ssmv/management/managingCommittee/${AdminId}`
      );
      const data = await response.json();

      if (response.ok) {
        const managementData = data.managingcommitee[0];
        setManagement({
          name: managementData.name,
          designation: managementData.designation,
          description: managementData.description
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
    setManagement(event.target.value);
  };

  const onCancelEdit=()=>{
    navigate('/Administration/ManagingCommitee');
  }

  const handleEdit = async (event) => {
    event.preventDefault();
    const updatedData = {Management };

    try {
      const response = await fetch(
        `https://test-moid.vercel.app/ssmv/management/managingCommittee/${AdminId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ managingcommitee: [Management] })
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
    navigate('Administration/ManagingCommitee');
  };

  return (
    <>
      <h1>Edit Managing Commitee</h1>
      <form className="news-form" onSubmit={handleEdit}>
        <div className="form-group">
          <span>Name:</span>
          <input
            type="text"
            name="name"
            value={Management.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <span>Designation:</span>
          <input
            type="text"
            name="designation"
            value={Management.designation}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <span>Description:</span>
          <textarea
            name="description"
            value={Management.description}
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

export default EditManage;