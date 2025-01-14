import React from 'react';
import logo from "./assets/Logo.svg"
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Services from './component/services';
import arrow from "./assets/downarrow.svg"
function App() {
  

  return (
    <>
   <nav>
     <span><img src={logo} alt="" /></span>
     <div>
      <ul>
        <li>Home</li>
        <li>Service <img src={arrow} alt="" /></li>
        <li>For Business <img src={arrow} alt="" /></li>
        <li>About Us <img src={arrow} alt="" /></li>
        <li><button>Download App</button>
        </li>
      </ul>
     </div>
   </nav>
   <div className="seperation"></div>
   <main>
    <div className="head">Our Services</div>
    <Services></Services>
   </main>
     
    </>
  )
}

export default App;
