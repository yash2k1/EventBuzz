import img1 from "../assets/dubai.jpg"
import img2 from "../assets/up.jpg"
import img3 from "../assets/agra.jpg"
import img4 from "../assets/jaipur.jpg"
import img5 from "../assets/Mumbai.jpg"
import img6 from "../assets/delhi.jpg"
import PresentInData from "./presentInData";
import "./PresentStyle.css"
export default function PresentIn(){
    return (
        <div className="presentIn">
           <h1>Present In</h1>
           <p>we are present in diffrent parts of the world</p>
             <div className="presentInCard">
            <div className="row1">
            <PresentInData
             image={img1}
             heading="we are in Dubai"
             text="Dubai is a city of skyscrapers, ports, and beaches, where big business takes place alongside sun-seeking tourism. Because of its large expatriate population, it feels like a Middle Eastern melting pot"
             />
                <PresentInData
             image={img2}
             heading="we are in uttar pardesh"
             text="Uttar Pradesh conjures an image of acres and ancient Hindu temples on the bank of meandering rivers; and towns and cities with narrow alleys where a rich culture inhabits.
              Uttar Pradesh is an unmissable holiday destination."
             />
                <PresentInData
             image={img3}
             heading="we are in Agra"
             text="Agra, the love capital of India, is home to one of the seven wonders of the world – the Taj Mahal. Reeking of the vibes of the Mughal Empire, Agra is all about enchanting forts, intriguing tombs, bustling markets."
             />
            </div>
            <div className="row2">
            <PresentInData
             image={img4}
             heading="we are in Jaipur"
             text="Jaipur is one of those places which can give you many reasons to visit. From its beautiful and amazing architectural monuments to having a splendid time with your loved ones, Jaipur makes the perfect destination."
             />
                <PresentInData
             image={img5}
             heading="we are in Mumbai"
             text="There’s always something to do in Mumbai But there’s still sooo much to discover in Mumbai. Like an exciting quiet trek away from the traffic or a great night out partying. You never know what you may find."
             />
                <PresentInData
             image={img6}
             heading="we are in Delhi"
             text="Delhi being the national capital and also a metropolitan city is always bustling with people and can certainly be called as the ‘city which never sleeps. it has become a vibrant and zestful city which will always welcome its visitors with open arms."
             />
            </div>
            

             </div>
             
        </div>
    );
   
}