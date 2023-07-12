import "./App.css";
// import Navbar from "./components/Navbar.js";
// import Hero from "./components/Hero.js";
import Contacts from "./routes/Contacts";
import Home from "./routes/Home";
import About from "./routes/About"
import Solutions from './routes/Solutions'

import { Route, Routes} from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom'; 
import { BrowserRouter as Router } from "react-router-dom";

function App(){
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="solutions" element={<Solutions/>}/>
      <Route path="Contacts" element={<Contacts/>}/>
    </Routes>
    
    
  </Router>
   
  );
}

export default App;
