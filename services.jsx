import "./service.css"
import drive from '../assets/drive.svg'
import car      from '../assets/car.svg'
import recharge from '../assets/recharge.svg'
import React from "react"
import { useState } from "react"

function Services()
{
  const [container] = useState([
    {
      image:drive,
      heading:'Professional Drivers',
      paragraph:'Hire verified,professional drivers for hassle free commutes,running errands and safe after-partly drops on an hour basis'
    },
    {
      image:car,
      heading:'Car Wash',
      paragraph:'Pressure wash, eco wash &amp; daily wash by trained executives equipped with high-grade machines and premium materials'
    },
    {
      image:recharge,
      heading:'Professional Drivers',
      paragraph:'Zip through the toll-gates on your outstation trips without any worries. Recharge your FASTag in just a few taps'
    },
  ])
  return (
    <>
    <div className="container">
         {
        container.map((service, i) => (

    <div key={i} className="service">
 
          <img className="image" src={service.image} alt="" />
            
        <h2>
          {service.heading}
        </h2>
        <p>
          {service.paragraph}
        </p>

          </div>
        )
        )
      }
      

      
      </div>
    </>
  )
}
export default Services;