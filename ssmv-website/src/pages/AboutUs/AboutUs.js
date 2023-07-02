import backendApi from "../../BackendApi"
import Service from "../../components/Service/Service"
import Header from "../../components/Header/Header"
import ServiceCarousel from "../../components/Service/ServiceCarousel"

const ComputerLab=()=>{
  return(<>
   <Header/>
   <ServiceCarousel
     title={`About SSMV`}
     api={`${backendApi}/aboutus/SSMV/`}
     fields={['imageurl']}
     baseUrl='/About Us/SSMV'
   />
   <Service
     title={`About SSMV`}
     api={`${backendApi}/aboutus/SSMV/`}
     fields={['description']}
     baseUrl='/About Us/SSMV'
   />
  </>)
}

export default ComputerLab
