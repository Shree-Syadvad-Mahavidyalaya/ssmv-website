import React,{useState,useEffect} from 'react'
import './Administration.css'
import Foot from '../../components/Footer/Footer'
import DoubleNavbar from '../../components/header/doubleNavbar'
import Update from '../../components/CRUD/Update/Update'
import Delete from '../../components/CRUD/Delete/Delete'
import EditManage from '../../components/Editpage/EditManage'

const Managingcommitee = () => {
  const [manage, setManage] = useState([]);
  const [editManage, setEditManage] = useState(null);


  useEffect(() => {
    // Fetch data from the backend API
    fetch('https://test-moid.vercel.app/ssmv/management/managingCommittee/')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setManage(data.managingcommittee);
        }
      })
      .catch(error => {
        console.error('Error fetching administration data:', error);
      });
  }, []);
  

  
return (
  <>
    <DoubleNavbar />
    {manage.map((manage) => (
      <div className="Admin-card2" key={manage._id}>
        
          <>
            <Update url={'/add-item/EditManage'} id={manage._id} />
            <Delete />
            <div className="Admin2" width="100%" height="300px">
            <div className="admin-head2">
              <div className="border">
                <img src={manage.image} className="admin-img2" alt="" />
              </div>
              <div className="admin-text2">
                <p className="admin-Head2">
                  <b>{manage.name}</b>
                </p>
                <p className="admin-desig2">{manage.designation}</p>
              </div>
            </div>
            <p className="admin-desc2">{manage.description}</p>
            
          </div>
          </>
      </div>
    ))}
    <Foot />
  </>
);
};
export default Managingcommitee;
