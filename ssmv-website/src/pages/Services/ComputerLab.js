
import Service from "../../components/Service/Service"

const ComputerLab=()=>{
  return(<>
   <Service
     service={`computerlab`}
     url={`https://test-moid.vercel.app/ssmv/services/computerLab/`}
     text='ComputerLab'
     updateUrl='/edit-item/services-info-computer'
   />
  </>)
}

export default ComputerLab