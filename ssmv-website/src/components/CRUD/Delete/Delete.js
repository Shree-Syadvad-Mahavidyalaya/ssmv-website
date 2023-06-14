import React, { useContext } from 'react'
import './Delete.css'
import MyContext from '../../events/MyContext'
import { useNavigate } from 'react-router-dom';

export default function Delete({url,baseurl}) {
  const isAdmin = useContext(MyContext)[0];
const navigate=useNavigate();
  const handleDelete = () => {
    console.log(url);
    
      fetch(url, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            // Handle successful deletion
            console.log('Item deleted successfully.');
          } else {
            // Handle error case
            console.error('Failed to delete item.');
          }
        })
        .catch((error) => {
          console.error('An error occurred while deleting the item:', error);
        });
    navigate(baseurl);
  };
  return isAdmin && <button className='delete-btn' onClick={handleDelete}>Delete</button>;
}

