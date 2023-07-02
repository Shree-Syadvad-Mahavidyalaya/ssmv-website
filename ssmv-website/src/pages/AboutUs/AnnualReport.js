import backendApi from "../../BackendApi";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AnnualReportComponent from "../../components/AboutUs/annualReport/AnnualReport";


const AnnualReport=()=>{

    return(
        <>
           <Header/>
            <AnnualReportComponent
            api={`${backendApi}/aboutus/annualReport/`}
            fields={['description']}
            baseUrl={'/About Us/Annual Report'}
            />
            <Footer/>    
        </>
    )
}

export default AnnualReport;