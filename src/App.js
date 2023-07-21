import "./App.css";
// import Navbar from "./components/Navbar.js";
// import Hero from "./components/Hero.js";
import Contacts from "./routes/Contacts";
import Home from "./routes/Home";
import About from "./routes/About"
import Solutions from './routes/Solutions'

import { Link, Route, Routes} from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom'; 
// import { BrowserRouter as Router } from "react-router-dom";

function App(){
  return (
    <div className="container">
      <nav>
        <ul>
<Link to ="/" class="list">
  Home
</Link>

<Link to ="/routes/About" class="list">
  About
</Link>
<Link to ="/src/routes/Solutions.js" class="list">
  Soutions 
</Link>
<Link to ="/src/routes/Contacts.js" class="list">
  Contacts
</Link>
        </ul>
      </nav>
    {/* <Router> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/solutions" element={<Solutions/>}/>
      <Route path="Contacts" element={<Contacts/>}/>
    </Routes>
    
    
  {/* </Router> */}
  </div>
   
  );
}

export default App;
