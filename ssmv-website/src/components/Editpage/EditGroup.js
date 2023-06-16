import React, { useState,useEffect } from 'react';
import './AddNewsForm.css'
// import course_id from '../../Pages/Courses/BA/BA'
import { useNavigate, useLocation } from 'react-router-dom';

function EditGroup() {
  const navigate = useNavigate();
  const location = useLocation();
  // const AdminId = location.state.props;
  const GroupId = location.state.props;
  console.log(GroupId);
  const [Group, setGroup] = useState({
    name: '',
    designation: '',
    department: '',
    
  });
console.log(useLocation());
  useEffect(() => {
    fetchGroup();
  }, []);

  const fetchGroup = async () => {
    try {
      const response = await fetch(
        `https://test-moid.vercel.app/ssmv/management/group/${GroupId}/`
      );
      const data = await response.json();
  
      if (response.ok) {
        const GroupData = data.Group; // Access the first object in the `founder` array
        setGroup({
          name: GroupData.name,
          designation: GroupData.designation,
          description: GroupData.description,
          image: GroupData.image
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
    setGroup((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  console.log(GroupId);
 
  const handleEdit = async (event) => {
    event.preventDefault();
    const updatedData = Group; // No need to wrap `administration` in an object
  
    try {
      const response = await fetch(
        `https://test-moid.vercel.app/ssmv/management/group/${GroupId}/`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedData) // Use 'founder' instead of 'collegeadministration'
        }
      );
  
      if (response.ok) {
        console.log('MANAGE updated successfully');
        // Handle any further actions or notifications after successful update
      } else {
        console.error('Failed to update administration');
        // Handle errors or display error messages
      }
    } catch (error) {
      console.error('Error updating administration:', error);
      // Handle errors or display error messages
    }
    navigate('/Administration/Group');
  };
  

  return (
    <>
      <h1>Edit Group</h1>
      <form className="news-form" onSubmit={handleEdit}>
        <div className="form-group">
          <span>Name:</span>
          <input
            type="text"
            name="name"
            value={Group.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <span>Designation:</span>
          <input
            type="text"
            name="designation"
            value={Group.designation}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <span>Department:</span>
          <input
            type="text"
            name="department"
            value={Group.image}
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

export default EditGroup;


