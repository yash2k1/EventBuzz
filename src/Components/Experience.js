import img1 from "../assets/Experience1.jpg"
import  img2 from "../assets/Experience2.jpg"
import ExperienceData from "./ExperienceData";
import "./ExperienceStyle.css"
export default function Experience() {
    return (
        <div className="Experience">
            <h1>Experience we have</h1>
            <p id="dream">Delivering Dreams</p>
         <ExperienceData
         heading="EVENT PLANNING & DESIGN"
         paragraph="With us, customization is guaranteed. From the very beginning, we will create a custom proposal tailored to your specific wants and needs. You'll be paired with an Infinity Event Team who will collaborate with you to bring your vision to life. We will team up with some of the best vendors in Nashville and take care of the all the details like meeting scheduling, delivery dates, payments, day-of setup, and more.

         When it’s showtime, our staff will work tirelessly to guarantee your event is effortless and unforgettable.
         
         "
         image1={img1}
         image2={img2}
        firstDiv="first-des"

         />
          <h1>Worked with</h1>
            <p></p>
         <ExperienceData
          heading="10 years of  Experience"
         paragraph="we had worked in various industries like weddings or conferences, and we can work independently or colaborate with others. we usually work directly with an Event Coordinator or Hospitality Manager."
         image1={img1}
         image2={img2}
        firstDiv="first-des-reverse"

         />
        </div>


    );
}