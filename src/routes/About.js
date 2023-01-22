import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutUsImg from "../assets/AboutUsImg.jpg"
import Footer from "../Components/Footer";
//import PresentIn from "../Components/PresentIn";
import Experience from "../Components/Experience";
import AboutUs from "../Components/AboutUs";

export default function About(){
    return (
        <>   
        <Navbar/>
         
          <Hero
          cName="hero-about"
          heroImg={AboutUsImg}
          title="About us"
          url="/About"
          />
         <AboutUs/>
          <Experience/>
           <Footer/>
          </>
    )
    }