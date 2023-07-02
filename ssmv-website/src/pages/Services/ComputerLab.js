
import backendApi from "../../BackendApi"
import Service from "../../components/Service/Service"
import Header from "../../components/Header/Header"
import ServiceCarousel from "../../components/Service/ServiceCarousel"

const ComputerLab=()=>{
  return(<>
   <Header/>
   <ServiceCarousel
     title={`computerLab`}
     api={`${backendApi}/services/computerLabImagesSlider/`}
     fields={['imageurl']}
     baseUrl='/Services/Computer'
   />
   <Service
     title={`computerlab`}
     api={`${backendApi}/services/computerLab/`}
     fields={['description']}
     baseUrl='/Services/Computer'
   />
  </>)
}

export default ComputerLab