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
    </Routes>
    </Router>
    </>
  );
}

export default App;
