
import Service from "../../components/Service/Service"

const Mess=()=>{
  return(<>
   <Service
     service={`mess`}
     url={`https://test-moid.vercel.app/ssmv/services/mess/`}
     text='Mess'
     updateUrl='/edit-item/services-info-mess'
   />
  </>)
}

export default Mess