
import backendApi from "../../BackendApi"
import Service from "../../components/Service/Service"
import Header from "../../components/Header/Header"
import ServiceCarousel from "../../components/Service/ServiceCarousel"

const Hostel=()=>{
  return(<>
    <Header/> 
    <ServiceCarousel
     title={`hostel`}
     api={`${backendApi}/services/hostelImagesSlider/`}
     fields={['imageurl']}
     baseUrl='/Services/Hostel'
   />
   <Service
     title={`hostel`}
     api={`${backendApi}/services/hostel/`}
     fields={['description']}
     baseUrl='/Services/Hostel'
   />
  </>)
}

export default Hostel