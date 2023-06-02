import React from 'react'
import './AllCourses.css'

export default function AllCourses() {

  const Courses_cards = [
    { name: "horizontal", url:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", description:"skipppp"},
    { name: "horizontal", url:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", description:"skipppp"},
    { name: "horizontal", url:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", description:"skipppp"},
  ];


  return (
    <div className='viewALL-container'>
      <div className="Viewcards">
        <img className="ACourses-image" src="" alt="" />
        <div><h2>name</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p></div>
      </div>
      <div className="Viewcards">
        <img className="ACourses-image" src="" alt="" />
        <div><h2>name</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p></div>
      </div>
    </div>
  )
}
