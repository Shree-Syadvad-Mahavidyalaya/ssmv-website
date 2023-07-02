import React ,{useEffect,useState}from 'react'
import './AnnualReport.css'
import Create from '../../CRUD/Create/Create'
import Delete from '../../CRUD/Delete/Delete'
import Update from '../../CRUD/Update/Update'

const AnnualReportComponent = (props) => {
  const {api}=props;
  const [dataArray,setDataArray]=useState([])
  useEffect(()=>{
    fetch(api)
    .then((result)=>{result.json()
    .then((resp)=>{
        setDataArray(resp.anuualReport)
      })
    })
  },[api])


  return (
    <div>  
        <div className='div'>
            <h3 className='report-head'><b className='box-head'>Annual Reports/Annual Accounts</b>
            <Create {...props}/> </h3>
        <div className='mainreport-box'>
        {dataArray?.map((data)=>(
            <div className='report-map'>
            <p>{data.description}</p>
            <Update {...props} api={api+data._id} data={data}/>
            <Delete {...props} api={api+data._id}/>
            </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default AnnualReportComponent



