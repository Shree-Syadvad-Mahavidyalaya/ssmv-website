import React, { useState } from 'react';
import MyContext from './components/events/MyContext';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Alumni from './pages/Alumni';
import Admission from './pages/Admission';
import LoginPage from './pages/LoginPage';
import AllCourses from './components/AllCourse/AllCourses';
import AboutUs from './pages/AboutUs/AboutUs';
import Administration from './pages/Administration/Administration';
import Group from '../src/pages/Group/Group'
import AnnualReport from './pages/AboutUs/AnnualReport/AnnualReport';
import Founder from './pages/Founder/Founder';
import Principle from './pages/Principle/Principle';
import Objective from './pages/Objective/Objective';
import Map from './pages/Map/Map';
import Donate from './pages/Founder/Donate/Donate';
import BA from './pages/Courses/BA/BA';
import MA from './pages/Courses/MA/MA';
import Hostel from './pages/Services/Hostel/Hostel';
import Computer from './pages/Services/Computer/Computer';
import Library from './pages/Services/Library/Library';
import Mess from './pages/Services/Mess/Mess';
import Yoga from './pages/Services/Yoga/Yoga';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Greviances from './pages/Greviances';
import AddNewsForm from './components/Editpage/AddNewsForm';
import AddImageForm from './components/Editpage/AddImageForm';
import AddNewRow from './components/Editpage/AddNewRow';
import AddNewCourseRow from './components/Editpage/AddNewCourseRow';
import AddImgDesc from './components/Editpage/AddImgDesc';
import AddNewCourse from './components/Editpage/AddNewCourse';
import AddAlumniDetails from './components/Editpage/AddAlumniDetails';




function App() {

  const [isAdmin, setIsAdmin]=useState(false);

    return (
    <MyContext.Provider value={[isAdmin,setIsAdmin]} >
     <Router>
      <Routes>
        <Route path='/ssmv-website' element={<Home/>}/>
        <Route path='/Alumni' element={<Alumni/>} />
        <Route path='/Admission' element={<Admission/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/ViewAll/AllCourses' element={<AllCourses/>}/>
        <Route path='/About Us/SSMV' element={<AboutUs/>} />
        <Route path='/Admininstration/College Administration' element={<Administration/>}/>
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
        <Route path='/ViewAll/Gallery' element={<Gallery/>}/>
        <Route path='/Greviances' element={<Greviances/>}/>
        <Route path='/add-item/news' element={<AddNewsForm/>}/>
        <Route path='/add-item/image' element={<AddImageForm/>}/>
        <Route path='/add-item/row' element={<AddNewRow/>}/>
        <Route path='/add-item/course-row' element={<AddNewCourseRow/>}/>
        <Route path='/add-item/Image-Desc' element={<AddImgDesc/>}/>
        <Route path='/add-item/new-course' element={<AddNewCourse/>}/>
        <Route path='/add-item/alumni-details' element={<AddAlumniDetails/>}/>
        <Route path='*' element={<Home/>}></Route>
    </Routes>
    </Router>
    </MyContext.Provider>
  );
};

export default App;