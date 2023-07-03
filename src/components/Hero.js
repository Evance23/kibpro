import './HeroStyles.css'; 


function Hero(props){
    return (<>
    <div className={props.cName}>
<img alt="HeroImg" src={props.heroImg}/>
   <div className="hero-text">
    <h1>
      {props.tite}
    </h1>
    <p>{props.text}</p>
<a href="/"> More</a>
   </div>
   
   
    </div>
    </>)
}

export default Hero;

