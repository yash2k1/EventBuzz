import emailjs from "@emailjs/browser";
import { useRef,useState } from "react";
import "./ContactForm.css"
const Result =()=>{
    return (
        <p>Your message has been successfullly sent, i will contact you soon</p>
    )
}
export default function ContactForm(props) {
    const[result,showResult]=useState(false);
   
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_vpmualg",
            "template_9k36xi2",
            e.target,
            "7MWnsbWHW9H6kN-yX"
        )

            .then(result => {
                console.log(result.text);
                alert("message send");

            })
            .catch(error => { console.log(error.text) })
            e.target.reset();
            showResult(true);
    };
   
    return (
        <>
            <div className="form">
                <h2>Send us mail</h2>
                {/* <form ref={form} onSubmit={sendEmail} className="styledForm" > */}
                <form action="" onSubmit={sendEmail} className="styledForm" >
                    <label className="styledLabel">Full Name</label>
                    <input className="styledInput" type="text" name="user_name" required />
                    <label className="styledLable">Email</label>
                    <input className="styledInput" type="email" name="email" required/>
                    <label className="styledLabel">Message</label>
                    <input className="styledInput2" type="text" name="message" required />
                    <input className="styledInput" type="submit" value="send" />


                </form>
                <div className="row">{result?<Result/>:null}</div>
                <div className="location">
                <h4>Located In</h4>
                <p> new delhi-110044</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8454.984048955728!2d77.23905829648399!3d28.572252877289426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3ff2179f111%3A0xe0f8dbc3a1b3378e!2sBlueStone%20Jewellery%20Lajpat%20Nagar!5e0!3m2!1sen!2sin!4v1666783736785!5m2!1sen!2sin"
                 width="100%"
                  height="450"
                  style={{border:0}}
                  allowFullScreen=""
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade">

                     </iframe>
                </div>
                
            </div>

        </>

    );
}