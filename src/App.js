import "./App.css";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";

const App = () => {
  return (
    <div className="App">
      <h1> Kibetech </h1>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://pngtree.com/freebackground/electronic-technology-website-texture-background-banner_1065222.html"
        title="Tech Solutions"
        text="We address you problems through definite solutions"
        buttonText="Learn More"
        url="/"
        btnClass="show"
      />
    </div>
  );
};

export default App;
