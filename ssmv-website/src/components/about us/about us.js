import React,{useEffect,useState} from 'react';
import './about us.css'

const AboutUs = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("https://test-moid.vercel.app/ssmv/aboutus").then((result)=>{
      result.json().then((resp)=>{
        // console.warn("result",resp)
        setData(resp)
      })
    })
  },[])
  console.warn(data)
  return (
    <div className='main-container'>
        <div className='container'>
          <div className='image-aboutus'>
            <img src="" alt='loading'/>
          </div>
          <div className='about'>
              <h2 id='about-heading'>ABOUT US</h2>
              <div className='content'>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum</p> */}
                {data.aboutus?.map((item)=>
                <p>{item.description}</p>)
 } 
                <button className='cont-btn'>Learn More</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default AboutUs;
