import React ,{useEffect,useState}from 'react'
import '../Founder/Founder.css'
import Foot from '../../components/Footer/Footer'
import DoubleNavbar from '../../components/header/doubleNavbar'

// const Founder = () => {
  
//   return (
//     <div>
//         <DoubleNavbar/>
//         <div>
//         <div className='founder-div'>
//             <h3 className='founder-head'>
//                 <div className='founder-border'>
//             <img src="https://source.unsplash.com/random/150x150/?news" className='founder-img' alt=''/>
//             </div>
//             <div className='founder-name'>
//               <b>SHEREE SYADWAD MAHAVIDYALAYA</b>
                
//                 <p className='founder-desig'>FOUNDER</p>
                
//                 <p className='founder-desig'>Shree Syadwad Mahavidyalaya</p>
                
//             </div>
//             </h3>
            
//         <div className='founder-box'>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
//         </div>
//         </div>
//         <Foot className="Foot"/>
//     </div>
//     </div>
//   )
// }

// export default Founder



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
              <p>{founderData.description}</p>
            </div>
          </div>
          <Foot className='Foot' />
        </div>
      )}
    </div>
  );
};

export default Founder;
