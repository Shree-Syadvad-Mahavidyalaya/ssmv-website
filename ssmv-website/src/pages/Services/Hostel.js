
import Service from "../../components/Service/Service"

const Hostel=()=>{
  return(<>
   <Service
     service={`hostel`}
     url={`https://test-moid.vercel.app/ssmv/services/hostel/`}
     text='Hostel'
     updateUrl='/edit-item/services-info-hostel'
   />
  </>)
}

export default Hostel