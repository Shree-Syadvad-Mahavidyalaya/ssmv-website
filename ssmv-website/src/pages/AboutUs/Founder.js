import backendApi from "../../BackendApi";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Person from "../../components/AboutUs/Person/Person";


const Founder=()=>{
    return (<>
            <Header/>
            <Person
             api={`${backendApi}/aboutus/founder/`}
             fields={['name', 'image', 'designation', 'description']}
             baseUrl={'/About Us/Founder'}
            />
            <Footer/>
        </>
    )
}

export default Founder;