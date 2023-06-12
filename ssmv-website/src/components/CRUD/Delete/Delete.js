import React, { useContext } from 'react'
import './Delete.css'
import MyContext from '../../events/MyContext'

export default function Delete({ handleDelete }) {
  const isAdmin = useContext(MyContext)[0];

  const handleClick = () => {
    if (isAdmin) {
      handleDelete();
    }
  };

  return (
    isAdmin && <button className='delete-btn' onClick={handleClick}>Delete</button>
  );
}

