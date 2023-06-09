import React, { useState } from 'react';
import './AddNewsForm.css'

function AddImageForm() {
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
    // Perform any additional actions, such as sending the data to the server
    console.log(news);
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
