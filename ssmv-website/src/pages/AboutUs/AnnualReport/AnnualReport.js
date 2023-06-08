/* eslint-disable jsx-a11y/anchor-is-valid */
import React ,{useEffect,useState}from 'react'
import Footer from '../../../components/Footer/Footer'
import '../AnnualReport/AnnualReport.css'
import DoubleNavbar from '../../../components/header/doubleNavbar'


const AnnualReport = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("https://test-moid.vercel.app/ssmv/aboutus/annualReport/").then((result)=>{
      result.json().then((resp)=>{
        // console.warn("result",resp)
        setData(resp)
      })
    })
  },[])


  return (
    <div>
      <DoubleNavbar/>
        <div className='div'>
            <h3 className='report-head'><b className='box-head'>Annual Reports/Annual Accounts</b></h3>
        <div className='mainreport-box'>
        {data.anuualReport?.map((item)=>
                <p>{item.description}</p>)
 }
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AnnualReport