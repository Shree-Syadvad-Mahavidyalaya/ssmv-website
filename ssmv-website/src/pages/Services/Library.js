
import backendApi from "../../BackendApi"
import Service from "../../components/Service/Service"
import Header from "../../components/Header/Header"
import ServiceCarousel from "../../components/Service/ServiceCarousel"

const Library=()=>{
  return(<>
     <Header/>
   <ServiceCarousel
     title={`library`}
     api={`${backendApi}/services/libraryImagesSlider/`}
     fields={['imageurl']}
     baseUrl='/Services/Library'
   />
   <Service
     title={`library`}
     api={`${backendApi}/services/library/`}
     fields={['description']}
     baseUrl='/Services/Library'
   />
  </>)
}

export default Library