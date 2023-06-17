import React, { useState } from 'react';
import MyContext from './components/events/MyContext';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Alumni from './Pages/Alumni'
import Admission from './Pages/Admission';
import LoginPage from './Pages/LoginPage';
import AllCourses from './components/AllCourse/AllCourses';
import AboutUs from './Pages/AboutUs/AboutUs';
import Administration from './Pages/Administration/Administration';
import Group from '../src/Pages/Group/Group'
import AnnualReport from './Pages/AboutUs/AnnualReport/AnnualReport';
import Founder from './Pages/Founder/Founder';
import Principle from './Pages/Principle/Principle';
import Objective from './Pages/Objective/Objective';
import Map from './Pages/Map/Map';
import Donate from './Pages/Donate/Donate';
import MA from './Pages/Courses/MA/MA';
import BA from './Pages/Courses/BA/BA';
import Hostel from './Pages/Services/Hostel/Hostel';
import Computer from './Pages/Services/Computer/Computer';
import Library from './Pages/Services/Library/Library';
import Mess from './Pages/Services/Mess/Mess';
import Yoga from './Pages/Services/Yoga/Yoga';
import Events from './Pages/Events';
import VGallery from './Pages/VGallery';
import Greviances from './Pages/Greviances';
import AddNewsForm from './components/Editpage/AddNewsForm';
import AddImageForm from './components/Editpage/AddImageForm';
import AddNewRow from './components/Editpage/AddNewRow';
import AddImgDesc from './components/Editpage/AddImgDesc';
import AddNewCourse from './components/Editpage/AddNewCourse';
import AddAlumniDetails from './components/Editpage/AddAlumniDetails';
import AddDonatorsName from './components/Editpage/AddDonatorsName';
import AddsubBA from './components/Editpage/EditBAcourses';
import AddsubMA from './components/Editpage/EditBAcourses';
import EditAdministration from './components/Editpage/EditAdministration';
import Managingcommitee from './Pages/Administration/Managingcommitee'
import EditSHostelinfo from './components/Editpage/EditSHostelinfo';
import EditLatest from './components/Editpage/EditLatest';
import EditSptlght from './components/Editpage/EditSptlght';
import EditSComputer from './components/Editpage/EditSComputer';
import Editevents from './components/Editpage/Editevents';
import EditTestimonials from './components/Editpage/EditTestimonials';
import EditSlibraryinfo from './components/Editpage/EditSlibraryinfo';
import EditSMessinfo from './components/Editpage/EditSMessinfo';
import EditSYogainfo from './components/Editpage/EditSYogainfo';
import AddTestimonials from './components/Editpage/AddTestimonials';
import AddAlumniEvents from './components/Editpage/AddAlumniEvents';
import AddLatest from './components/Editpage/AddLatest';
import AddAlumniVGallery from './components/Editpage/AddAlumniVGallery';
import EditManage from './components/Editpage/EditManage';
import AddReport from './components/Editpage/AddReport';
import EditFounder from './components/Editpage/EditFounder';
import EditPrinciple from './components/Editpage/EditPrinciple'
import EditObjective from './components/Editpage/EditObjectives';
import EditSSMVAbout from './components/Editpage/EditSSMVAbout';
import AddBACourse from './components/Editpage/AddBACourse';
import LoadingPage from './Pages/loading/loading';
import Logout from './components/Logout/Logout';
import IndivCoursesPage from './Pages/IndivCoursesPage';
import EditDonators from './components/Editpage/EditDonators';
import MediaPage from './Pages/MediaPage';
import Gallery from './Pages/VGallery';
import EditGroup from './components/Editpage/EditGroup';
import AddGroup from './components/Editpage/Addgroup'
import EditHomeCourses from './components/Editpage/EditHomeCourses';
import EditNews from './components/Editpage/EditNews';


function App() {

  const [isAdmin, setIsAdmin]=useState(true);

    return (
    <MyContext.Provider value={[isAdmin,setIsAdmin]} >
     <Router>
      <Routes>
        <Route path='/ssmv-website' element={<Home/>}/>
        <Route path='/Alumni' element={<Alumni/>} />
        <Route path='/Admission' element={<Admission/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/Logout' element={<Logout/>}/>
        <Route path='/ViewAll/AllCourses' element={<AllCourses/>}/>
        <Route path='/About Us/SSMV' element={<AboutUs/>} />
        <Route path='/Admininstration/CollegeAdministration' element={<Administration/>}/>
        <Route path='/Administration/ManagingCommitee' element={<Managingcommitee/>}/>
        <Route path='/Administration/Group' element={<Group/>}/>
        <Route path='/About Us/Annual Report' element={<AnnualReport/>}/>
        <Route path='/About Us/Founder' element={<Founder/>}/>
        <Route path='/About Us/Principle' element={<Principle/>}/>
        <Route path='/About Us/Objectives' element={<Objective/>}/>
        <Route path='/About Us/Map' element={<Map/>}/>
        <Route path='/Donate' element={<Donate/>}/>
        <Route path='/Courses/BA' element={<BA/>}/>
        <Route path='/Courses/MA' element={<MA/>}/>
        <Route path='/Services/Hostel' element={<Hostel/>}/>
        <Route path='/Services/Computer' element={<Computer/>}/>
        <Route path='/Services/Library' element={<Library/>}/>
        <Route path='/Services/Mess' element={<Mess/>}/>
        <Route path='/Services/Yoga' element={<Yoga/>}/>
        <Route path='/ViewAll/AllEvents' element={<Events/>}/>
        <Route path='/ViewAll/VGallery' element={<VGallery/>}/>
        <Route path='/ViewAll/Gallery' element={<Gallery/>}/>
        <Route path='/Media' element={<MediaPage/>}/>
        <Route path='/Greviances' element={<Greviances/>}/>
        <Route path='/learn-more/course' element={<IndivCoursesPage/>}/>
        <Route path='/add-item/news' element={<AddNewsForm/>}/>
        <Route path='/add-item/image' element={<AddImageForm/>}/>
        <Route path='/add-item/row' element={<AddNewRow/>}/>
        <Route path='/add-item/course-BA' element={<AddsubBA/>}/>
        <Route path='/add-item/course-MA' element={<AddsubMA/>}/>
        <Route path='/add-item/Image-Desc' element={<AddImgDesc/>}/>
        <Route path='/add-item/new-course' element={<AddNewCourse/>}/>
        <Route path='/add-item/alumni-details' element={<AddAlumniDetails/>}/>
        <Route path='/add-item/alumni-testimonials' element={<AddTestimonials/>}/>
        <Route path='/add-item/alumni-events' element={<AddAlumniEvents/>}/>
        <Route path='/add-item/alumni-latest' element={<AddLatest/>}/>
        <Route path='/add-item/alumni-video-gallery' element={<AddAlumniVGallery/>}/>
        <Route path='/add-item/donators-name' element={<AddDonatorsName/>}/>
        <Route path='/add-item/EditAdmin' element={<EditAdministration/>}/>
        <Route path='/edit-item/services-info-hostel' element={<EditSHostelinfo/>}/>
        <Route path='/edit-item/alumni-latest' element={<EditLatest/>}/>
        <Route path='/edit-item/spotlight' element={<EditSptlght/>}/>
        <Route path='/edit-item/services-info-computer' element={<EditSComputer/>}/>
        <Route path='/edit-item/alumni-events' element={<Editevents/>}/>
        <Route path='/edit-item/alumni-testimonials' element={<EditTestimonials/>}/>
        <Route path='/edit-item/services-info-library' element={<EditSlibraryinfo/>}/>
        <Route path='/edit-item/services-info-mess' element={<EditSMessinfo/>}/>
        <Route path='/edit-item/services-info-yoga' element={<EditSYogainfo/>}/>
        <Route path='/add-item/EditManage' element={<EditManage/>}/>
        <Route path='/add-item/AddReport' element={<AddReport/>}/>
        <Route path='/add-item/EditFounder' element={<EditFounder/>}/>
        <Route path='/add-item/EditPrinciple' element={<EditPrinciple/>}/>
        <Route path='add-item/EditObjective' element={<EditObjective/>}/>
        <Route path='/add-item/ssmv-about' element={<EditSSMVAbout/>}/>
        <Route path='/add-item/AddBACourse' element={<AddBACourse/>}/>
        <Route path='/edit-item/Donate' element={<EditDonators/>}/>
        <Route path='/add-item/EditGroup' element={<EditGroup/>}/>
        <Route path='/add-item/AddGroup' element={<AddGroup/>}/>
        <Route path='/add-item/EditHomeCourses' element={<EditHomeCourses/>}/>
        <Route path='/add-item/EditNews' element={<EditNews/>}/>
        <Route path='*' element={<Home/>}></Route>
        <Route path='/loading' element={<LoadingPage/>}></Route>
    </Routes>
    </Router>
    </MyContext.Provider>
  );
};

export default App;