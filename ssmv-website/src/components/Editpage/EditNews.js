import React, { useState,useEffect } from 'react';
import './AddNewsForm.css'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function EditNews() {
  const navigate = useNavigate();
  const location = useLocation();
  const NewsId = location.state.props;
  console.log(NewsId);
  const [News, setNews] = useState({
    date: '',
    description: '',
    imagesurl:''
  });
console.log(useLocation());
  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        `https://test-moid.vercel.app/ssmv/news/${NewsId}/`
      );
      const data = await response.json();
  
      if (response.ok) {
        const NewsData = data.News; // Access the first object in the `founder` array
        setNews({
          date: NewsData.date,
          description: NewsData.description,
          imagesurl: NewsData.imagesurl
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
    setNews((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  console.log(NewsId);
 
  const handleEdit = async (event) => {
    event.preventDefault();
    const updatedData = News; // No need to wrap `administration` in an object
  
    try {
      const response = await axios.put(
        `https://test-moid.vercel.app/ssmv/news/${NewsId}/`,
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
    navigate('*');
  };
  

  return (
    <>
      <h1>Edit News</h1>
      <form className="news-form" onSubmit={handleEdit}>
        <div className="form-group">
          <span>date:</span>
          <input
            type="text"
            name="date"
            value={News.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <span>Image url:</span>
          <input
            type="text"
            name="imagesurl"
            value={News.imagesurl}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <span>Description:</span>
          <textarea
            name="description"
            value={News.description}
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

export default EditNews;


