
import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';

const App = ( ) => {
  return (
    <div className="App">
      <h1> Kibetech </h1>
     <Navbar/>
     <Hero
     cName='hero'
     heroImg='https://wallpapersafari.com/4k-tech-wallpaper/'
     title='Tech Solutions'
     text='We address you problems through definite solutions'
     
     
     />
    </div>
  );
}

export default App;
