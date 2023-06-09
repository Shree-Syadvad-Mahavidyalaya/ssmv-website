import { useContext } from 'react'
import './Logout.css'
import MyContext from '../events/MyContext'
import { useEffect } from 'react';
import A from '../AnchorTag';

export default function Logout() {
  const setIsAdmin=useContext(MyContext)[1];
  useEffect(() => {
    setIsAdmin(false);
  }, [setIsAdmin]);
  return (
    <div className='logout-container'>
      <h1>Logout Successfully</h1>
      <p>You are now logged out</p>
      <button id='logout-page-btn'><A href='/ssmv-website'>Go to home page</A></button>
    </div>
  )
}

