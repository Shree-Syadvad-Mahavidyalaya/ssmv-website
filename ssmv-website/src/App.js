import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Alumni from './pages/Alumni';

function App() {
  return (
      <Router>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/Alumni' element={<Alumni/>} />
          <Route path='*' element={<Home/>} />
        </Routes>
      </Router>
  );
};

export default App;