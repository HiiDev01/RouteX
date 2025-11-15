import React, { useState, useEffect } from 'react'
import orangecar from '../assets/wrag.png'
import '../styles/About.css';
import DealerCar from '../component/DealerCar';
import CarImg from '../assets/wrag.png'
import { FaCar } from "react-icons/fa6";
import { GiCarDoor,GiGearStickPattern,GiCarSeat } from "react-icons/gi";
import { PiBagFill } from "react-icons/pi";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { SiHonda,SiAudi,SiNissan,SiMazda,SiToyota } from "react-icons/si"; 
import ServiceNav from '../component/ServiceNav';
import parkingImg from '../assets/parking.png';
import inboxIcon1 from '../assets/iconbox-image_01.png'
import inboxIcon2 from '../assets/iconbox-image_02.png'
import inboxIcon3 from '../assets/iconbox-image_03.png'
import transportImg from '../assets/transportation.png';
import carImg from '../assets/car.png';
import Footer from '../component/footer/Footer';
import Testimonial from '../component/Testimonial';
import Steps from '../component/Steps';
import { supabase } from '../SupabaseClient/Client';



const About = () => {
  const [car, setCar] = useState([])
const Lists = [
  {
    img: parkingImg,
    number: 20,
    text: "car type"
  },
  {
    img: transportImg,
    number: 85,
    text: "rental outlets"
  },
  {
    img: carImg,
    number: 75,
    text: "repair shop"
  },
]
const steps = [
    {
      icon: inboxIcon1,
      title: "Select Car",
      text: "To contribute to positive change and achieve our sustainability goals with many extraordinary",
    },
    {
      icon: inboxIcon2,
      title: "Contact Operator",
      text: "To contribute to positive change and achieve our sustainability goals with many extraordinary",
    },
    {
      icon: inboxIcon3,
      title: "Let's Drive",
      text: "To contribute to positive change and achieve our sustainability goals with many extraordinary",
    },
];

const cars = [
  {
    id: 1,
    year: 2020,
    name: "Honda Pilot",
    price: 38500,
    monthly: 322,
    mileage: 20,
    transmission: "Auto",
    fuel: "Diesel",
    image: "/images/honda-pilot.png",
    isFavourite: true,
  },
  {
    id: 2,
    year: 2019,
    name: "Honda Civic Si Sedan",
    price: 25200,
    monthly: 299,
    mileage: 30,
    transmission: "Auto",
    fuel: "Diesel",
    image: "/images/honda-civic.png",
    isFavourite: false,
  },
  {
    id: 3,
    year: 2017,
    name: "Clarity Plug-In Hybrid",
    price: 33400,
    monthly: 300,
    mileage: 15,
    transmission: "Auto",
    fuel: "Diesel",
    image: "/images/clarity.png",
    isFavourite: false,
  },
    {
    id: 4,
    year: 2017,
    name: "Clarity Plug-In Hybrid",
    price: 33400,
    monthly: 300,
    mileage: 15,
    transmission: "Auto",
    fuel: "Diesel",
    image: "/images/clarity.png",
    isFavourite: false,
  },
];

useEffect(()=>{
  const fetchCars = async()=>{
    try {
      const {data, error} = await supabase
      .from("cars")
      .select("*")
      if(error){
        console.log(error.message)
        return;
      }
      setCar(data);
    } catch (error) {
      console.log(error)
    }
  }
  fetchCars();
}, [])


  return (
    <>
      <section className="about-container">
        <div className="about-image">
          <img src={orangecar} alt="Company" />
          <button className="play-btn">&#9654;</button>
        </div>
  
        <div className="about-content">
          <h4>About Company</h4>
          <h2>
            You start the engine <br /> and your adventure begins
          </h2>
          <p>
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>
  
          <div className="about-stats">
            {Lists.map((list, index)=>(
              <div key={index} className='aboutStat'>
                <div className="aboutStatIcon">
                  <img src={list.img} alt={list.name}/>
                </div>
                <div className='aboutStatText'>
                  <h2>{list.number} <span>{list.text}</span></h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Steps steps={steps}/>
      <section className='aboutShowSection'>
        



        <div className='aboutShow'>
          {car.map((cars)=>(
            <div key={cars.id} className='abtShow'>
              <div className='aboutShowingImg'>
                <img src={CarImg} alt={CarImg.name} />
              </div>
              <div className='aboutShowTxt'>
                <div className='aboutShowTxtHead'>
                  <h1>$ {cars.price_per_day}</h1>
                  <small>rent per day</small>
                </div>
                <div className='aboutShowTxtBody'>
                  <p><FaCar size={25} className='abtIcon'/> Model: {cars.name}</p>
                  <p><GiCarDoor size={25} className='abtIcon'/> Doors: {cars.door}</p>
                  <p><GiCarSeat size={25} className='abtIcon'/> Type: {cars.fuel}</p>
                  <p><PiBagFill size={25} className='abtIcon'/>  Luggage: 2 Suitcases / 2 Bags</p>
                  <p><GiGearStickPattern size={25} className='abtIcon'/> Transmission: {cars.transmission}</p>
                </div>
                <div className='aboutShowLink'>
                  <button>book ride <IoMdCheckmarkCircle size={25}/></button>
                  <a href="/"><IoCallSharp size={25}/> +23490896752</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='overlayContent'>
        <div className="backgroundOverlay">
          <h2>Save big with our cheap car <br /> rental! Local Suppliers. 24/7 Support.</h2>
          <a href='/'>book ride <IoMdCheckmarkCircle size={25}/></a>
        </div>
      </section>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default About
