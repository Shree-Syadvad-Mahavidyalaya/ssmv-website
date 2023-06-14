import React,{useState,useEffect} from 'react'
import Foot from '../../components/Footer/Footer'
import '../Objective/Objective.css'
import DoubleNavbar from '../../components/header/doubleNavbar'
import Update from '../../components/CRUD/Update/Update'

const Objective = () => {
  const [data,setData]=useState([])
  useEffect(() => {
    fetch('https://test-moid.vercel.app/ssmv/aboutus/objectives/')
      .then(response => response.json())
      .then(data => {
        if (data.success && data.objective.length > 0) {
          setData(data.objective[0]);
        }
      })
      .catch(error => {
        console.error('Error fetching principle data:', error);
      });
  }, []);
  console.log(data._id);
  return (
    <div>
      <DoubleNavbar/>
        <div className='objective-div'>
          <Update url={'/add-item/EditObjective'} ObjectiveId={data._id}/>
            <h3 className='objective-head'><b>OBJECTIVES OF THE UNIVERSITY</b></h3>
        <div className='objective-box'>
                <p>{data.description}</p>)
            {/* <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
        </div>
        </div>
        <Foot className="Foot"/>
    </div>
  )
}

export default Objective