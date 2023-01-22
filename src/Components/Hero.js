import "./HeroStyles.css";
import EventSeatIcon from '@mui/icons-material/EventSeat';
export default function Hero(props){
    
    return (
        <>
        <div className={props.cName}>
            <img className="img1" alt="HeroImg" src={props.heroImg} />
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>
                   {props.buttonText}<i>{props.ExploreLogo}</i>
                </a>
            </div>
        </div>
        </>
    );
    }