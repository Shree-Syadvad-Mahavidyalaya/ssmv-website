import React, { useState } from 'react';
import './AddNewsForm.css'

function AddNewsForm() {
  const [news, setNews] = useState({
    name: '',
    designation: '',
    dept: ''
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
    <h1>Add New Row</h1>
    <form onSubmit={handleSubmit} className='news-form'>
      <div className="form-group">
        <span>Name:</span>
        <input
          type="text"
          name="name"
          value={news.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <span>Designation:</span>
        <input
          type="text"
          name="designation"
          value={news.designation}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <span>Department:</span>
        <input
          type="text"
          name="dept"
          value={news.dept}
          onChange={handleChange}
          required
        />
      </div>
      
      
      <button type="submit" id='add-news-btn'>Add</button>
    </form>
    </>
  );
}

export default AddNewsForm;
