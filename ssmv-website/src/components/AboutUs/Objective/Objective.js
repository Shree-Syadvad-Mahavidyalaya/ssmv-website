import React,{useState,useEffect} from 'react'
import '../Objective/Objective.css'
import Update from '../../../components/CRUD/Update/Update'

const ObjectiveComponent = (props) => {
  const {api}=props;
  const [data,setData]=useState([])
  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => {
        if (data.success && data.objective.length > 0) {
          setData(data.objective[0]);
        }
      })
      .catch(error => {
        console.error('Error fetching principle data:', error);
      });
  }, [api]);

  return (
    <div>
        <div className='objective-div'>
          <Update {...props} api={api+data._id} data={data}/>
            <h3 className='objective-head'><b>OBJECTIVES OF THE UNIVERSITY</b></h3>
        <div className='objective-box'>
                <p>{data.description}</p>
        </div>
        </div>
    </div>
  )
}

export default ObjectiveComponent