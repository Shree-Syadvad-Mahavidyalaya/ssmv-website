import './App.css';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom";
import Alumni from './pages/Alumni';
import AboutUs from './pages/AboutUs/AboutUs';
import Administration from './pages/Administration/Administration';
import Group from '../src/pages/Group/Group'
import AnnualReport from './pages/AboutUs/AnnualReport/AnnualReport';
import Founder from './pages/Founder/Founder';
import Principle from './pages/Principle/Principle';

function App() {
  return (
    <>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/Alumni' element={<Alumni/>} />
      <Route path='/About Us/SSMV' element={<AboutUs/>} />
      <Route path='/Admininstration/College Administration' element={<Administration/>}/>
      <Route path='/Administration/Group' element={<Group/>}/>
      <Route path='/About Us/Annual Report' element={<AnnualReport/>}/>
      <Route path='/About Us/Founder' element={<Founder/>}/>
      <Route path='/About Us/Principle' element={<Principle/>}/>
      </Routes>
    </>
  );
};

export default App;