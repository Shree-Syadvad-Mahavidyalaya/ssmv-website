import React ,{useEffect,useState}from 'react'
import './Person.css'
import Update from '../../CRUD/Update/Update'

const Person = (props) => {
  const {api}=props;

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => {
        if (data.success && data.data.length > 0) {
          setData(data.data[0]);
        }
      })
      .catch(error => {
        console.error('Error fetching founder data:', error);
      });
  }, [api]);

  return (
    <div>
      {data && (
        <div>
          <Update {...props} api={api+data._id} data={data}/>
          <div className='founder-div'>
            <h3 className='founder-head'>
              <div className='founder-border'>
                <img src={data.image} className='founder-img' alt='' />
              </div>
              <div className='founder-name'>
                <b>{data.name}</b>
                <p className='founder-desig'>{data.designation}</p>
              </div>
            </h3>
            <div className='founder-box'>
              <p>{data.description}</p>
              <Update {...props} api={api+data._id} data={data}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Person;
