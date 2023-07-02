import backendApi from "../../BackendApi";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ObjectiveComponent from "../../components/AboutUs/Objective/Objective";


const Objective=()=>{
    return (<>
            <Header/>
            <ObjectiveComponent
             api={`${backendApi}/aboutus/objectives/`}
             fields={['description']}
             baseUrl={'/About Us/Objectives'}
            />
            <Footer/>
        </>
    )
}

export default Objective;