
import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';

const App = ( ) => {
  return (
    <div className="App">
      <h1> Kibetech </h1>
     <Navbar/>
     <Hero
     cName="hero"
     heroImg="https://www.wallpaperflare.com/technics-computer-technology-internet-design-3d-web-digital-wallpaper-ovzi"/>
     title="Agile Solutions"
     text='We address you problems thorugh definite solutions'
    </div>
  );
}

export default App;
