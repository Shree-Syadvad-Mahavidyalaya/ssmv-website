import React, { useState } from 'react';
import MyContext from './components/events/MyContext';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Alumni from './pages/Alumni'
import Admission from './pages/Admission';
import LoginPage from './pages/LoginPage';
import AllCourses from './components/AllCourse/AllCourses';
import AboutUs from './pages/AboutUs/AboutUs';
import Group from '../src/pages/Group/Group'
import AnnualReport from './pages/AboutUs/AnnualReport';
import Founder from './pages/AboutUs/Founder';
import Principle from './pages/AboutUs/Principle';
import Objective from './pages/AboutUs/Objective';
import Map from './pages/Map/Map';
import Donate from './pages/Donate/Donate';
import Hostel from './pages/Services/Hostel';
import ComputerLab from './pages/Services/ComputerLab';
import Library from './pages/Services/Library';
import Mess from './pages/Services/Mess';
import Yoga from './pages/Services/Yoga';
import Events from './pages/Events';
import VGallery from './pages/VGallery';
import Managingcommitee from './pages/Administration/ManagingCommitee'
import Greviances from './pages/Greviances';
import LoadingPage from './pages/loading/loading';
import Logout from './components/Logout/Logout';
import IndivCoursesPage from './pages/IndivCoursesPage';
import MediaPage from './pages/MediaPage';
import Gallery from './pages/Gallery';
import MA from "./pages/Academics/MA"
import BA from "./pages/Academics/BA"
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import CollegeAdministration from './pages/Administration/CollegeAdministration';


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
        <Route path='/Admininstration/CollegeAdministration' element={<CollegeAdministration/>}/>
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
        <Route path='/Services/Computer' element={<ComputerLab/>}/>
        <Route path='/Services/Library' element={<Library/>}/>
        <Route path='/Services/Mess' element={<Mess/>}/>
        <Route path='/Services/Yoga' element={<Yoga/>}/>
        <Route path='/ViewAll/AllEvents' element={<Events/>}/>
        <Route path='/ViewAll/VGallery' element={<VGallery/>}/>
        <Route path='/ViewAll/Gallery' element={<Gallery/>}/>
        <Route path='/Media' element={<MediaPage/>}/>
        <Route path='/Greviances' element={<Greviances/>}/>
        <Route path='/learn-more/course' element={<IndivCoursesPage/>}/>
        <Route path='*' element={<Home/>}></Route>
        <Route path='/loading' element={<LoadingPage/>}></Route>
        <Route path='/addPage' element={<AddPage></AddPage>}></Route>
        <Route path='/editPage' element={<EditPage/>}></Route>
    </Routes>
    </Router>
    </MyContext.Provider>
  );
};

export default App;