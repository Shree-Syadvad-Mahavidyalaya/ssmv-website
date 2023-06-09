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
import Donate from './Pages/Founder/Donate/Donate';
import BA from './Pages/Courses/BA/BA';
import MA from './Pages/Courses/MA/MA';
import Hostel from './Pages/Services/Hostel/Hostel';
import Computer from './Pages/Services/Computer/Computer';
import Library from './Pages/Services/Library/Library';
import Mess from './Pages/Services/Mess/Mess';
import Yoga from './Pages/Services/Yoga/Yoga';
import Events from './Pages/Events';
import Gallery from './Pages/Gallery';
import Greviances from './Pages/Greviances';
import Editpage from './components/Editpage/AddNewsForm';
import Updatepage from './components/Updatepages/Updatepage'



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
        <Route path='/add-item' element={<Editpage/>}/>
        <Route path='/update-item' element={<Updatepage/>}/>
        <Route path='*' element={<Home/>}></Route>
    </Routes>
    </Router>
    </MyContext.Provider>
  );
};

export default App;