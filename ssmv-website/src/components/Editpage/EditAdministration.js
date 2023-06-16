import React, { useState,useEffect } from 'react';
import './AddNewsForm.css'
// import course_id from '../../Pages/Courses/BA/BA'
import { useNavigate, useLocation } from 'react-router-dom';

function EditAdmin() {
  const navigate = useNavigate();
  const location = useLocation();
  // const AdminId = location.state.props;
  const AdminId = location.state.props;
  console.log(AdminId);
  const [Admin, setAdmin] = useState({
    name: '',
    designation: '',
    description: '',
    image:''
  });
console.log(useLocation());
  useEffect(() => {
    fetchAdmin();
  }, []);

  const fetchAdmin = async () => {
    try {
      const response = await fetch(
        `https://test-moid.vercel.app/ssmv/management/collegeAdministration/${AdminId}/`
      );
      const data = await response.json();
  
      if (response.ok) {
        const AdminData = data.Admin; // Access the first object in the `founder` array
        setAdmin({
          name: AdminData.name,
          designation: AdminData.designation,
          description: AdminData.description,
          image: AdminData.image
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
    setAdmin((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  console.log(AdminId);
 
  const handleEdit = async (event) => {
    event.preventDefault();
    const updatedData = Admin; // No need to wrap `administration` in an object
  
    try {
      const response = await fetch(
        `https://test-moid.vercel.app/ssmv/management/collegeAdministration/${AdminId}/`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedData) // Use 'founder' instead of 'collegeadministration'
        }
      );
  
      if (response.ok) {
        console.log('Adminupdated successfully');
        // Handle any further actions or notifications after successful update
      } else {
        console.error('Failed to update administration');
        // Handle errors or display error messages
      }
    } catch (error) {
      console.error('Error updating administration:', error);
      // Handle errors or display error messages
    }
    navigate('/Admininstration/CollegeAdministration');
  };
  

  return (
    <>
      <h1>Edit Administration</h1>
      <form className="news-form" onSubmit={handleEdit}>
        <div className="form-group">
          <span>Name:</span>
          <input
            type="text"
            name="name"
            value={Admin.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <span>Designation:</span>
          <input
            type="text"
            name="designation"
            value={Admin.designation}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <span>Image url:</span>
          <input
            type="text"
            name="image"
            value={Admin.image}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <span>Description:</span>
          <textarea
            name="description"
            value={Admin.description}
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

export default EditAdmin;


