import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Administration from './Pages/Administration/Administration';
import Group from '../src/Pages/Group/Group'
import AnnualReport from './Pages/AboutUs/AnnualReport/AnnualReport';
import Founder from './Pages/Founder/Founder';
import Principle from './Pages/Principle/Principle';
import Objective from './Pages/Objective/Objective';
import Map from './Pages/Map/Map';
import Donate from './Pages/Donate/Donate';
import BA from './Pages/Courses/BA/BA';
import MA from './Pages/Courses/MA/MA';
import Hostel from './Pages/Services/Hostel/Hostel';
import Computer from './Pages/Services/Computer/Computer';
import Library from './Pages/Services/Library/Library';
import Mess from './Pages/Services/Mess/Mess';
import Yoga from './Pages/Services/Yoga/Yoga';


function App() {
  return (
    <>
     <Router>
       <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/AboutUs' element={<AboutUs/>} />
    <Route path='/Admin' element={<Administration/>}/>
    <Route path='/Group' element={<Group/>}/>
    <Route path='/Report' element={<AnnualReport/>}/>
    <Route path='/Founder' element={<Founder/>}/>
    <Route path='/Principle' element={<Principle/>}/>
    <Route path='/Objective' element={<Objective/>}/>
    <Route path='/Map' element={<Map/>}/>
    <Route path='/Donate' element={<Donate/>}/>
    <Route path='/BA' element={<BA/>}/>
    <Route path='/MA' element={<MA/>}/>
    <Route path='/Hostel' element={<Hostel/>}/>
    <Route path='/Computer' element={<Computer/>}/>
    <Route path='/Library' element={<Library/>}/>
    <Route path='/Mess' element={<Mess/>}/>
    <Route path='/Yoga' element={<Yoga/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
