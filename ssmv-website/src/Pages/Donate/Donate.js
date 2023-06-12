/* eslint-disable jsx-a11y/scope */
import React from 'react'
import Footer from '../../components/Footer/Footer';
import DoubleNavbar from '../../components/header/doubleNavbar';
import Delete from '../../components/CRUD/Delete/Delete'
import Update from '../../components/CRUD/Update/Update'
import Create from '../../components/CRUD/Create/Create';

const data = [
  { name: "Anom",},
  { name: "Megha"},
  { name: "Subham"},
  { name: "Anom",},
  { name: "Megha"},
  { name: "Subham"},
]

const Donate = () => {
  return (
    <>
    <DoubleNavbar/>
  <div>
    <Create url ={'/add-item/donators-name'}/>
      <div className="Table">
          <table>
              
              <tr>
                  <th scope="col">Name</th>
              </tr>
              {data.map((val, key) => {
                  return (
                      <tr scope="row" key={key}>
                          <td>{val.name}<Delete/><Update/></td>
                      </tr>
                  )
              })}
          </table>
      </div>

  </div>
  <Footer/>
  </>
)
}

export default Donate;