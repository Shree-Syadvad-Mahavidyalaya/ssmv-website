import React, { useState } from 'react';
import './AddNewsForm.css'
import { useNavigate, useLocation } from 'react-router-dom';

function AddImageForm() {
  const navigate = useNavigate();
  const [news, setNews] = useState({
    image: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNews((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch('https://test-moid.vercel.app/ssmv/aboutus/annualReport/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(news),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Do any additional actions after successfully adding the news, such as showing a success message or refreshing the data.
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle any error that occurred during the request.
      });
      navigate('/About Us/SSMV');
  };

  return (
    <>
    <h1>Add Image</h1>
    <form onSubmit={handleSubmit} className='news-form'>
      <div className="form-group">
        <span>Image Url:</span>
        <input
          type="text"
          name="image"
          value={news.image}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" id='add-news-btn'>Add</button>
    </form>
    </>
  );
}

export default AddImageForm;
