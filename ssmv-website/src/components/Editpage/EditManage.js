import React, { useState,useEffect } from 'react';
import './AddNewsForm.css'
import { useNavigate, useLocation } from 'react-router-dom';

function EditManage() {
  const navigate = useNavigate();
  const location = useLocation();
  // const AdminId = location.state.props;
  const ManageId = location.state.props;
  console.log(ManageId);
  const [Manage, setManage] = useState({
    name: '',
    designation: '',
    description: '',
    image:''
  });
console.log(useLocation());
  useEffect(() => {
    fetchManage();
  }, []);

  const fetchManage = async () => {
    try {
      const response = await fetch(
        `https://test-moid.vercel.app/ssmv/management/managingCommittee/${ManageId}/`
      );
      const data = await response.json();
  
      if (response.ok) {
        const ManageData = data.Manage; // Access the first object in the `founder` array
        setManage({
          name: ManageData.name,
          designation: ManageData.designation,
          description: ManageData.description,
          image: ManageData.image
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
    setManage((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  console.log(ManageId);
 
  const handleEdit = async (event) => {
    event.preventDefault();
    const updatedData = Manage; // No need to wrap `administration` in an object
  
    try {
      const response = await fetch(
        `https://test-moid.vercel.app/ssmv/management/managingCommittee/${ManageId}/`,
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
    navigate('/Administration/ManagingCommitee');
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
            value={Manage.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <span>Designation:</span>
          <input
            type="text"
            name="designation"
            value={Manage.designation}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <span>Image url:</span>
          <input
            type="text"
            name="image"
            value={Manage.image}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <span>Description:</span>
          <textarea
            name="description"
            value={Manage.description}
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

export default EditManage;


