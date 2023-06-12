import React,{useState,useEffect} from 'react'
import './Administration.css'
import Foot from '../../components/Footer/Footer'
import DoubleNavbar from '../../components/header/doubleNavbar'
import Update from '../../components/CRUD/Update/Update'


const Managingcommitee = () => {
  const [committeeData, setCommitteeData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://test-moid.vercel.app/ssmv/management/managingCommittee/');
      const data = await response.json();
      if (data.success) {
        setCommitteeData(data.managingcommittee);
      } else {
        console.log('Error:', data.error);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <>
      <DoubleNavbar />

      {committeeData.map((member, index) => (
        <div className="Admin-card2" key={index}>
          <div className="Admin2" width="100%" height="300px">
            <div className="admin-head2">
              <div className="border">
                <img src={member.image} className="admin-img2" alt="" />
              </div>
              <div className="admin-text2">
                <p className="admin-Head2">
                  <b>{member.name}</b>
                </p>
                <p className="admin-desig2">{member.designation}</p>
              </div>
            </div>
            <p className="admin-desc2">{member.description} <Update/></p>
          </div>
        </div>
      ))}

      <Foot />
    </>
  );
};

export default Managingcommitee;
