
import Service from "../../components/Service/Service"

const Yoga=()=>{
  return(<>
   <Service
     service={`yoga`}
     url={`https://test-moid.vercel.app/ssmv/services/yoga/`}
     text='Yoga'
     updateUrl='/edit-item/services-info-yoga'
   />
  </>)
}

export default Yoga