
import React,{useState,useEffect} from 'react'
import './Administration.css'
import Foot from '../Footer/Footer'
import DoubleNavbar from '../Header/Header'
import Update from '../CRUD/Update/Update'
import Delete from '../CRUD/Delete/Delete'
import Create from '../CRUD/Create/Create'

const Administration = (props) => {
  const [dataArray, setDataArray] = useState([]);
  const {title,api,fields,baseUrl}=props;
  console.log(props);

  useEffect(() => {
    // Fetch data from the backend API
    fetch(api)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log(data);
          setDataArray(data.data);
        }
      })
      .catch(error => {
        console.error('Error fetching administration data:', error);
      });
  }, [api]);


  
return (
  <>
    <DoubleNavbar />
    <Create {...props}/>
    {dataArray.map((data) => (
      <div className="Admin-card2" key={data._id}>
          <>
            <Update {...props} api={api+data._id} data={data}/>
            <Delete {...props} api={api+data._id}/>
            <div className="Admin2" width="100%" height="300px">
            <div className="data-head2">
              <div className="border">
                <img src={data.image} className="data-img2" alt="" />
              </div>
              <div className="data-text2">
                <p className="data-Head2">
                  <b>{data.name}</b>
                </p>
                <p className="data-desig2">{data.designation}</p>
              </div>
            </div>
            <p className="data-desc2">{data.description}</p>
            
          </div>
          </>
       
      </div>
    ))}
    <Foot />
  </>
);
};
export default Administration;
