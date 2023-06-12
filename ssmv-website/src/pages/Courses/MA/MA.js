/* eslint-disable jsx-a11y/scope */
import React from 'react'
import '../BA/BA.css'
import Foot from '../../../components/Footer/Footer'
import DoubleNavbar from '../../../components/header/doubleNavbar'
import Delete from '../../../components/CRUD/Delete/Delete'
import Update from '../../../components/CRUD/Update/Update'
import Create from '../../../components/CRUD/Create/Create'

const MAcourses = [
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

const MA = () => {
  return (
    <>
    <DoubleNavbar/>
    <div>
    <Create url = {'/add-item/course-row'}/>
        <div className="Table">
            <table>
                
                <tr>
                    <th scope="col">Course</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Department</th>
                </tr>
                {MAcourses.map((val, key) => {
                    return (
                        <tr scope="row" key={key}>
                            <td>{val.name}<Delete/> <Update/></td>
                            <td>{val.designation}</td>
                            <td>{val.department}</td>
                        </tr>
                    )
                })}
            </table>
        </div>

    </div>
    <Foot/>
    </>
  )
}

export default MA