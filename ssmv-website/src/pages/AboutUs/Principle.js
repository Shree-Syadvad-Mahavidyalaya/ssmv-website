import backendApi from "../../BackendApi";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Person from "../../components/AboutUs/Person/Person";


const Principle=()=>{
    return (<>
            <Header/>
            <Person
             api={`${backendApi}/aboutus/principle/`}
             fields={['name', 'image', 'designation', 'description']}
             baseUrl={'/About Us/Principle'}
            />
            <Footer/>
        </>
    )
}

export default Principle;