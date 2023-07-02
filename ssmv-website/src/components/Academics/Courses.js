import React, { useState, useEffect } from 'react';
import DoubleNavbar from '../Header/Header';
import Delete from '../CRUD/Delete/Delete';
import Update from '../CRUD/Update/Update';
import Create from '../CRUD/Create/Create';
import Footer from '../Footer/Footer';
import A from '../AnchorTag';
import "./BA.css";

const Courses = (props) => {
  const {title, api, fields, baseUrl}=props;

  const [dataArray, setDataArray] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      if (data.success) {
         setDataArray(data.data);
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
      <Create {...props} />
      <div>
        <A href={title}></A>
        <div className="Table">
          <table>
            <thead>
              <tr>
                <th scope="col">Course</th>
              </tr>
            </thead>
            <tbody>
              {dataArray.map((data) => (
                <tr key={data._id}>
                  <td>
                      <>
                        {data.subject}
                        <Delete {...props} api={api+data._id} />
                        <Update {...props} api={api+data._id}  data={data}/>
                      </>
                  </td>
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

export default Courses;


