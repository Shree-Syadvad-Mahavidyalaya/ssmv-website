import React, { useState } from 'react';
import './AddNewsForm.css'

function AddDonatorsName() {
  const [news, setNews] = useState({
    name: ''
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
    <h1>Add Name</h1>
    <form onSubmit={handleSubmit} className='news-form'>
      <div className="form-group">
        <span>Name:</span>
        <input
          type="name"
          name="name"
          value={news.name}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" id='add-news-btn'>Add</button>
    </form>
    </>
  );
}

export default AddDonatorsName;
