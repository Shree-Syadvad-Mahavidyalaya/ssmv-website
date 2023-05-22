// import logo from './logo.svg';
import './App.css';
import Foot from "../src/components/Foot"
import News from "./components/News"
import Courses from "../src/components/Courses.js"



function App() {
  return (
    <div className="App">
      <Courses/>
      <News/>
      <Foot/>
    </div>
  );
}

export default App;
