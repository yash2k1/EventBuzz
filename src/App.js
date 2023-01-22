
import './App.css';
import {Routes,Route} from "react-router-dom"
import Contact from './routes/Contact';
import Service from './routes/Service';
import About from './routes/About';
import Home from './routes/Home';

function App() { 
  return (
    <div className="App">
     
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Service' element={<Service/>}/>
      <Route path='/Contact' element={<Contact/>}/>
     </Routes>
   
     
    </div>
  );
}

export default App;
