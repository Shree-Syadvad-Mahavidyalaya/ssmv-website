/* eslint-disable jsx-a11y/scope */
import React,{useState,useEffect} from 'react'
import '../Group/Group.css'
import Footer from '../../components/Footer/Footer'
import DoubleNavbar from '../../components/header/doubleNavbar'
import Delete from '../../components/CRUD/Delete/Delete'
import Update from '../../components/CRUD/Update/Update'
import Create from '../../components/CRUD/Create/Create'
import A from '../../components/AnchorTag'


const Group = () => {
  const [groupData, setGroupData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://test-moid.vercel.app/ssmv/management/group/');
      const data = await response.json();
      if (data.success) {
        setGroupData(data.group);
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
      <div>
        <A href="/add-item/row">
          <Create url={'/add-item/AddGroup'}/>
        </A>
        <div className="Table">
          <table>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Designation</th>
                <th scope="col">Department</th>
              </tr>
            </thead>
            <tbody>
              {groupData.map((val, key) => (
                <tr scope="row" key={key}>
                  <td>
                    {val.name}
                    <Delete url={`https://test-moid.vercel.app/ssmv/management/group/${val._id}`} baseurl={'/Administration/Group'}/>
                    <Update url={'/add-item/EditGroup'} id={val._id}/>
                  </td>
                  <td>{val.designation}</td>
                  <td>{val.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Group;
