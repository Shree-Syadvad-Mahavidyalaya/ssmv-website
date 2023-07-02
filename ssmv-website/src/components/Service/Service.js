import React,{useState,useEffect} from 'react'
import Footer from '../../components/Footer/Footer'
import  Update from '../CRUD/Update/Update'
import "./Service.css"


const Service = (props) => {
  const {title,api,fields,baseUrl}=props;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(data.data[0])
        if (data.success && data.data.length > 0) {
          setData(data.data[0]);
          console.log(data.data[0])
          
        }
      })
      .catch(error => {
        console.error('Error fetching service data:', error);
      });
  },[api,title]);

  return (
    <div>
      {data && (
        <div className='service-div'>
          <h3 className='service-head'>
            <b>{title} <Update {...props} api={api+data._id} data={data}/></b>
          </h3>
          <div className='service-box'>
            <p>{data.description}</p>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Service;
