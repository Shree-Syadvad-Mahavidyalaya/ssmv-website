import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Alumni from './pages/Alumni';
import Admission from './pages/Admission';
import LoginPage from './pages/LoginPage';
import AllCourses from './components/AllCourse/AllCourses';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route exact path='/ssmv-website' element={<Home/>} />
      <Route path='/Alumni' element={<Alumni/>} />
      <Route path='/Admission' element={<Admission/>}/>
      <Route path='/Login' element={<LoginPage/>}/>
      <Route path='/ViewAll/AllCourses' element={<AllCourses/>}/>
      </Routes>
    </Router>
    </>
  );
};

export default App;