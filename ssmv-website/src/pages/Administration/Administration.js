/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect} from 'react'
import './Administration.css'
import Foot from '../../components/Footer/Footer'
import DoubleNavbar from '../../components/header/doubleNavbar'
import Update from '../../components/CRUD/Update/Update'
import Delete from '../../components/CRUD/Delete/Delete'
import EditAdministration from '../../components/Editpage/EditAdministration'

const Administration = () => {
  const [admins, setAdmins] = useState([]);
  const [editAdmin, setEditAdmin] = useState(null);


  useEffect(() => {
    // Fetch data from the backend API
    fetch('https://test-moid.vercel.app/ssmv/management/collegeAdministration/')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setAdmins(data.collegeadministration);
        }
      })
      .catch(error => {
        console.error('Error fetching administration data:', error);
      });
  }, []);
  const handleEdit = (AdminId) => {
    setEditAdmin(AdminId);
  };

  const handleCancelEdit = () => {
    setEditAdmin(null);
  };

  
return (
  <>
    <DoubleNavbar />
    {admins.map((admin) => (
      <div className="Admin-card2" key={admin._id}>
          <>
            <Update url={'/add-item/EditAdmin'} Id={admin._id} />
            <Delete />
            <div className="Admin2" width="100%" height="300px">
            <div className="admin-head2">
              <div className="border">
                <img src={admin.image} className="admin-img2" alt="" />
              </div>
              <div className="admin-text2">
                <p className="admin-Head2">
                  <b>{admin.name}</b>
                </p>
                <p className="admin-desig2">{admin.designation}</p>
              </div>
            </div>
            <p className="admin-desc2">{admin.description}</p>
            
          </div>
          </>
       
      </div>
    ))}
    <Foot />
  </>
);
};
export default Administration;
