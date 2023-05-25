import './App.css';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom";
import Alumni from './pages/Alumni';


function App() {
  return (
    <>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/Alumni' element={<Alumni/>} />
      </Routes>
    </>
  );
};

export default App;
