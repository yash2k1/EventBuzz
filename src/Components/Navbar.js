import "./Navbarstyles.css" ;
import React from "react";
import { MenuItems } from "./MenuItems";
import { useState } from "react";
import ReorderIcon from '@mui/icons-material/Reorder';
import ClearIcon from '@mui/icons-material/Clear';
import {Link} from "react-router-dom";
export default function Navbar(){
  // its a hook called usestate
  const [on , changeState]=useState(0);
  
// find is a toggling function

 const find =()=>{
  
  changeState(!on);
    
 }
     return(
   
             <nav className="NavbarIteams">
             <h1 className="navbar-logo">
              EventBuzz
             </h1>
             <div className="menu-icons" onClick={find}>{on? <ClearIcon/>:<ReorderIcon/> }</div>
             <ul className={on? "nav-menu active" :"nav-menu" }>
              {
                MenuItems.map((Value,index)=>{
                  return(
                    <li key={index}>
                    <Link className={Value.classnames} to={Value.url}>
                     <i>{Value.icon} </i> {Value.title}
                    </Link>
                   </li>
                  )
           
                })
              }
         
              
              
             </ul>
           </nav>
           
);
}


// class Navbar extends Component {
// render(){
//     return {
//         <nav className="NavbarIteams">
//         <h1 className="Navbar-logo">Event</h1>
//         <ul className="nav-menu">
//         <li><Link>Home</Link></li>
//         <li>About</li>
//         <li>Contact</li>
//         <li>Contact</li>
//         </ul>
//         </nav>
//     };
// }
// }