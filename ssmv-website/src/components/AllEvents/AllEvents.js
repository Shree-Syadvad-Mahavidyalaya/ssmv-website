import React,{useState,useEffect} from 'react';
import './AllEvents.css'
import Delete from "../CRUD/Delete/Delete";
import Update from "../CRUD/Update/Update";
import axios from 'axios';
import Create from '../CRUD/Create/Create';

export default function AllEvents() {

  const [aevents, setaevents] = useState([]);

  useEffect(() => {
    axios.get('https://test-moid.vercel.app/ssmv/events/')
      .then(response => {
        const { event } = response.data;
        setaevents(event);
      })
      .catch(error => {
        console.error('Error fetching latest data:', error);
      });
  }, []);

  return (
    <>
    <h1>Events<Create url={'/add-item/AllEvents'}/><hr></hr></h1>
    <div className='viewALL-container-events'>
      {aevents.map((item) => (
        <div className="Viewcards-events" key={item.id}>
        <img className="AEvents-image" src={item.imagesurl} alt="" />
        <div id='event-about'><h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>{item.venue}</p>
        <Delete url={`https://test-moid.vercel.app/ssmv/events/${item._id}`} baseurl={'/ViewAll/AllEvents'} />
        <Update url={'/edit-item/AllEvents'} id ={item._id}/></div>
      </div>
      ))}
    </div>
    </>
  )
}
