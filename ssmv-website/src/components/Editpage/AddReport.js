import React, { useState,useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './AddNewsForm.css'


function AddReport() {
  const navigate=useNavigate();
  const [report, setReport] = useState({
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReport((prevState) => ({
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
      body: JSON.stringify(report),
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
      navigate('/About Us/Annual Report');
  };

  return (
    <>
      <h1>Add Report</h1>
      <form onSubmit={handleSubmit} className='news-form'>
        <div className="form-group">
          <span>Report:</span>
          <textarea
            name="description"
            value={report.description}
            onChange={handleChange}
            rows="6"
            required
          />
        </div>
        <button type="submit" id='add-news-btn'>Add</button>
      </form>
    </>
  );
}

export default AddReport;
