import React ,{useEffect,useState}from 'react'
import '../Founder/Founder.css'
import DoubleNavbar from '../../components/header/doubleNavbar'
import Update from '../../components/CRUD/Update/Update'
import Footer from '../../components/Footer/Footer'

const Founder = () => {
  const [founderData, setFounderData] = useState(null);

  useEffect(() => {
    fetch('https://test-moid.vercel.app/ssmv/aboutus/founder/')
      .then(response => response.json())
      .then(data => {
        if (data.success && data.founder.length > 0) {
          setFounderData(data.founder[0]);
        }
      })
      .catch(error => {
        console.error('Error fetching founder data:', error);
      });
  }, []);

  return (
    <div>
      <DoubleNavbar />
      {founderData && (
        <div>
          <Update url={'/add-item/EditFounder'} id={founderData._id}/>
          <div className='founder-div'>
            <h3 className='founder-head'>
              <div className='founder-border'>
                <img src={founderData.image} className='founder-img' alt='' />
              </div>
              <div className='founder-name'>
                <b>{founderData.name}</b>
                <p className='founder-desig'>{founderData.designation}</p>
              </div>
            </h3>
            <div className='founder-box'>
              <p>{founderData.description}</p><Update/>
            </div>
          </div>
          <Footer className='Foot' />
        </div>
      )}
    </div>
  );
};

export default Founder;
