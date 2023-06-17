
import Service from "../../components/Service/Service"

const Library=()=>{
  return(<>
   <Service
     service={`library`}
     url={`https://test-moid.vercel.app/ssmv/services/library/`}
     text='Library'
     updateUrl='/edit-item/services-info-library'
   />
  </>)
}

export default Library