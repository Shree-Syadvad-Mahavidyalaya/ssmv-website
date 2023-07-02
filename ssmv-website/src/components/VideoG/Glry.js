import React,{useState,useEffect} from 'react';
import './VideoG.css';
import Delete from '../CRUD/Delete/Delete';
import Create from '../CRUD/Create/Create';
import Update from '../CRUD/Update/Update';
import axios from 'axios';
import A from '../AnchorTag';

const Glry = (props) => {
    
  const [dataArray, setDataArray] = useState([]);
  const {api,fields,baseUrl}=props;

  useEffect(() => {
    axios.get(api)
      .then(response => {
        const { alumni_gallery } = response.data;
        setDataArray(alumni_gallery);
      })
      .catch(error => {
        console.error('Error fetching events data:', error);
      });
  }, [api]);

  return (
    <div id='container'>
      <div id='heading'>
        <h1>GALLERY <Create {...props}/> <hr id='line2'></hr></h1>
        <button className='view-btn'><A href='/ViewAll/Gallery'>View</A></button>
      </div>
      <div className='gallery-boxes'>
      {dataArray.map(data => (
          <div className='box1' key={data._id}>
            <img src={data.imagesurl} alt=''/>
          <Update {...props} api={api+data._id} data={data} />
          <Delete {...props} api={api+data._id}/>
          </div>                      
      ))}
      </div>
      </div>
  )
}

export default Glry;
