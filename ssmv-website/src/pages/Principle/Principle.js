import React,{useState,useEffect} from 'react'
import Footer from '../../components/Footer/Footer'
import '../Principle/principle.css'
import DoubleNavbar from '../../components/header/doubleNavbar'
import Update from '../../components/CRUD/Update/Update'


const Principle = () => {
  const [principleData, setPrincipleData] = useState(null);

  useEffect(() => {
    fetch('https://test-moid.vercel.app/ssmv/aboutus/principle/')
      .then(response => response.json())
      .then(data => {
        if (data.success && data.principle.length > 0) {
          setPrincipleData(data.principle[0]);
        }
      })
      .catch(error => {
        console.error('Error fetching principle data:', error);
      });
  }, []);

  return (
    <div>
      <DoubleNavbar />
      {principleData && (
        <div>
          
          <div className='principle-div'>
          <Update url={'/add-item/EditPrinciple'} PrincipleId={principleData._id}/>
            <h3 className='principle-head'>
              <div className='principle-border'>
                <img src={principleData.image} className='principle-img' alt='' />
              </div>
              <div className='principle-name'>
                <b>{principleData.name}</b>
                <p className='principle-desig'>{principleData.designation}</p>
                
              </div>
            </h3>
            <div className='principle-box'>
              <p>{principleData.description}</p><Update/>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Principle;



