import React,{useState,useEffect} from 'react'
import Footer from '../../components/Footer/Footer'
import '../Principle/principle.css'
import DoubleNavbar from '../../components/header/doubleNavbar'
import Update from '../../components/CRUD/Update/Update'

// const Principle = () => {
//   return (
//     <div>
//         <DoubleNavbar/>
//         <div>
//         <div className='principle-div'>
//             <h3 className='principle-head'>
//                 <div className='principle-border'>
//             <img src="https://source.unsplash.com/random/150x150/?news" className='principle-img' />
//             </div>
//             <div className='principle-name'>
//                 <b>Shree Syadwad Mahavidyalaya</b>
//                 <p className='principle-desig'>PRINCIPLE</p>
//                 <p className='principle-desig'>Shree Syadwad Mahavidyalaya</p>
//             </div>
//             </h3>
            
//         <div className='principle-box'>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//         </div>
//         </div>
//         <Footer/>
//     </div>
//     </div>
//   )
// }

// export default Principle

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



