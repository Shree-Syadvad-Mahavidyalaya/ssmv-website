/* eslint-disable jsx-a11y/scope */
import React,{useState,useEffect} from 'react'
import '../Group/Group.css'
import Footer from '../../components/Footer/Footer'
import DoubleNavbar from '../../components/header/doubleNavbar'
import Delete from '../../components/CRUD/Delete/Delete'
import Update from '../../components/CRUD/Update/Update'

const data = [
    { name: "Anom", designation: "Lorem ipsum dolor sit amet,", department: "Lorem ipsum dolor sit amet," },
    { name: "Megha", designation: "Lorem ipsum dolor sit amet,", department: "Lorem ipsum dolor sit amet," },
    { name: "Subham", designation: "Lorem ipsum dolor sit amet,", department: "Lorem ipsum dolor sit amet," },
    { name: "Anom", designation: "Lorem ipsum dolor sit amet,", department: "Lorem ipsum dolor sit amet," },
    { name: "Megha", designation: "Lorem ipsum dolor sit amet,", department: "Lorem ipsum dolor sit amet," },
    { name: "Subham", designation: "Lorem ipsum dolor sit amet,", department: "Lorem ipsum dolor sit amet," },
    { name: "Anom", designation: "Lorem ipsum dolor sit amet,", department: "Lorem ipsum dolor sit amet," },
    { name: "Megha", designation: "Lorem ipsum dolor sit amet,", department: "Lorem ipsum dolor sit amet," },
    { name: "Subham", designation: "Lorem ipsum dolor sit amet,", department: "Lorem ipsum dolor sit amet," },
]


// const Group = () => {
//   return (
//       <>
//       <DoubleNavbar/>
//     <div>
//     <a href='/add-item/row'><button className='add-btn'>Add</button></a>
//         <div className="Table">
//             <table>
                
//                 <tr>
//                     <th scope="col">Name</th>
//                     <th scope="col">Designation</th>
//                     <th scope="col">Department</th>
//                 </tr>
//                 {data.map((val, key) => {
//                     return (
//                         <tr scope="row" key={key}>
//                             <td>{val.name}<Delete/><Update/></td>
//                             <td>{val.designation}</td>
//                             <td>{val.department}</td>
//                         </tr>
//                     )
//                 })}
//             </table>
//         </div>

//     </div>
//     <Footer/>
//     </>
//   )
// }

// export default Group


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
        <a href="/add-item/row">
          <button className="add-btn">Add</button>
        </a>
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
                    <Delete />
                    <Update />
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
