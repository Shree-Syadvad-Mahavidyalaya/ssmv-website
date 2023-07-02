
import Service from "../../components/Service/Service"
import backendApi from "../../BackendApi"
import Header from "../../components/Header/Header"
import ServiceCarousel from "../../components/Service/ServiceCarousel"

const Yoga=()=>{
  return(<>
      <Header/>
   <ServiceCarousel
     title={`yoga`}
     api={`${backendApi}/services/yogaImagesSlider/`}
     fields={['imageurl']}
     baseUrl='/Services/Yoga'
   />
   <Service
     title={`yoga`}
     api={`${backendApi}/services/yoga/`}
     fields={['description']}
     baseUrl='/Services/Yoga'
   />
  </>)
}

export default Yoga