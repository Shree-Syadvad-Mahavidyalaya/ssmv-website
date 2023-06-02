import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import Administration from './pages/Administration/Administration';
import Group from '../src/pages/Group/Group'
import AnnualReport from './pages/AboutUs/AnnualReport/AnnualReport';
import Founder from './pages/Founder/Founder';
import Principle from './pages/Principle/Principle';
import Objective from './pages/Objective/Objective';
import Map from './pages/Map/Map';
import Donate from './pages/Donate/Donate';
import BA from './pages/Courses/BA/BA';
import MA from './pages/Courses/MA/MA';
import Hostel from './pages/Services/Hostel/Hostel';
import Computer from './pages/Services/Computer/Computer';
import Library from './pages/Services/Library/Library';
import Mess from './pages/Services/Mess/Mess';
import Yoga from './pages/Services/Yoga/Yoga';


function App() {
  return (
    <>
     <Router>
       <Routes>
    <Route path='/' element={<Home/>}/>
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
    </Routes>
    
      <Routes>
      <Route exact path='/ssmv-website' element={<Home/>} />
      
      <Route path='/About Us/SSMV' element={<AboutUs/>} />
      <Route path='/Admininstration/College Administration' element={<Administration/>}/>
      <Route path='/Administration/Group' element={<Group/>}/>
      <Route path='/About Us/Annual Report' element={<AnnualReport/>}/>
      <Route path='/About Us/Founder' element={<Founder/>}/>
      <Route path='/About Us/Principle' element={<Principle/>}/>
      </Routes>
    </Router>
    </>
  );
};

export default App;