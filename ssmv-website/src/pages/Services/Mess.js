
import backendApi from "../../BackendApi"
import Service from "../../components/Service/Service"
import Header from "../../components/Header/Header"
import ServiceCarousel from "../../components/Service/ServiceCarousel"

const Mess=()=>{
  return(<>
    <Header/>
   <ServiceCarousel
     title={`mess`}
     api={`${backendApi}/services/messImagesSlider/`}
     fields={['imageurl']}
     baseUrl='/Services/Mess'
   />
   <Service
     title={`mess`}
     api={`${backendApi}/services/mess/`}
     fields={['description']}
     baseUrl='/Services/Mess'
   />
  </>)
}

export default Mess