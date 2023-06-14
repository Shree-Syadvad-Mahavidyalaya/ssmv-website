import React, { useState,useEffect } from 'react';
import './AddNewsForm.css'
import course_id from '../../Pages/Courses/BA/BA'
import { useNavigate, useLocation } from 'react-router-dom';

function EditAbout( ) {
  const navigate = useNavigate();
  const location = useLocation();
  const AboutId = location.state.props;
  const [about, setAbout] = useState({
    description: ''
  });
console.log(useLocation());
  useEffect(() => {
    fetchAbout();
  }, []);

  const fetchAbout = async () => {
    try {
        
      const response = await fetch(
        `https://test-moid.vercel.app/ssmv/aboutus/SSMV/${AboutId}`
      );
      const data = await response.json();
  
      if (response.ok) {
        const aboutData = data.about; // Access the first object in the `founder` array
        setAbout({
          description: aboutData.description
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
    setAbout((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };


  
  const handleEdit = async (event) => {
    event.preventDefault();
    const updatedData = about; // No need to wrap `administration` in an object
    console.log(updatedData);
    try {
        
      const response = await fetch(
        `https://test-moid.vercel.app/ssmv/aboutus/SSMV/${AboutId}`,
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
    navigate('/About Us/SSMV');
  };
  

  return (
    <>
      <h1>Edit About</h1>
      <form className="news-form" onSubmit={handleEdit}>
        <div className="form-group">
          <span>Description:</span>
          <textarea
            name="description"
            value={about.description}
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

export default EditAbout


