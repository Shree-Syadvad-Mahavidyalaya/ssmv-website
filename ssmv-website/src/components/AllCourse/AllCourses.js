/* eslint-disable no-unused-vars */
import React from 'react'
import './AllCourses.css'
import { useState } from 'react';
import Delete from "../CRUD/Delete/Delete";
import Update from '../CRUD/Update/Update';
import A from '../AnchorTag';

export default function AllCourses() {

  const Courses_cards = [
    { id: "1", name: "horizontal", url:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,"},
    { id: "2",name: "horizontal", url:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,"},
    { id: "3",name: "horizontal", url:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,"},
  ];

  const deleteById = id => {
    setacourse(oldValues => {
      return oldValues.filter(item => item.id !== id)
    })
  }

  const [acourses, setacourse] = useState(Courses_cards);

  return (
    <>
    <h1>Courses<A href='/add-item/new-course'><button className='add-btn'>Add</button></A></h1>
    <div className='viewALL-container'>
      {acourses.map((item) => (
        <div className="Viewcards" key={item.id}>
        <img className="ACourses-image" src={item.url} alt="" />
        <div><h2>{item.name}</h2>
        <p>{item.description}</p>
        <Delete onClick={() => deleteById(item.id)}/><Update/></div>
      </div>
      ))}
    </div>
    </>
  )
}
