import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import '../Editpage/AddNewsForm.css'

function Updatepage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    id: id,
    description: ''
  });

  useEffect(() => {
    axios.get(`https://test-moid.vercel.app/ssmv/aboutus/SSMV/`)
      .then(res => {
        setValues({ ...values, description: res.data.description });
      })
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://test-moid.vercel.app/ssmv/aboutus/SSMV/648161e974064dd11eb13ddf/`, values)
      .then(res => {
        navigate('/ssmv-website');
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h1>Add News</h1>
      <form className='news-form' onSubmit={handleSubmit}>
        <div className="form-group">
          <span>Description:</span>
          <input
            type="text"
            name="description"
            value={values.description}
            onChange={e => setValues({ ...values, description: e.target.value })}
          />
        </div>
        <button type="submit" id='add-news-btn'>Add About</button>
      </form>
    </>
  );
}

export default Updatepage;

