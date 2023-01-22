import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import image1 from "../assets/mainBakgroundImage.jpg";
// import image2 from "../assets/image2.jpg";
// import image3 from "../assets/image3.jpg";
// import image4 from "../assets/image4.jpg";
// import image5 from "../assets/image5.jpg";
// //import SouthEastIcon from '@mui/icons-material/SouthEast';

// import SimpleImageSlider from "react-simple-image-slider";
// import { useEffect, useState } from "react";
import Experience from "../Components/Experience.js";
import PresentIn from "../Components/PresentIn";
import Footer from "../Components/Footer";

export default function Home(){
  // const images = [
  //   { url: {image1} },
  //   { url: {image2} },
  //   { url: {image3} },
  //   { url: {image4} },
  //   { url: {image5} },

  // ];
//   <SimpleImageSlider
//   width={896}
//   height={504}
//   images={images}
//   showBullets={true}
//   showNavs={true}
// />


return (
    <>   
    <Navbar/>
    
     
   
      <Hero
      cName="hero" 
      heroImg={image1}
      
      title="Every love story is beautiful, but yours should be unique"
      text="Choose your style"
      url="/"
      btnClass="show"
      //buttonText="Explore More"
    //  ExploreLogo={<SouthEastIcon/>}
      />
      <Experience/>
      <PresentIn/>
      <Footer/>
    </>
)
}