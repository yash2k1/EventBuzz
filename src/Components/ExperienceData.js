
import "./ExperienceStyle.css";
export default function ExperienceData(props){
return (
    <div className={props.firstDiv}>
    <div className="des-text">
        <h2>{props.heading}</h2>
        <p>{props.paragraph}</p>
    </div>
    <div className="image">
        <img src={props.image1} alt="Experience1" />
        <img src={props.image2} alt="Experience2" />
    </div>
</div>
);
}