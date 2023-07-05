import './HeroStyles.css'; 


function Hero(props){
    return (<>
    <div className={props.cName}>
<img alt="HeroImg" src="https://www.wallpaperflare.com/technics-computer-technology-internet-design-3d-web-digital-wallpaper-ovzi"/>
   <div className="hero-text">
    <h1>Tech Solutions</h1>
    <p>We address you problems through definite solutions</p>
<a href="/"> More</a>
   </div>
    </div>
    </>)
}

export default Hero;

