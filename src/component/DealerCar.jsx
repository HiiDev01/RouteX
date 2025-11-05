import React, { useState } from 'react'
import '../styles/DealerCar.css'
import { SiHonda,SiAudi,SiNissan,SiMazda,SiToyota } from "react-icons/si";
import CarCard from '../component/CarCard';
import Slider from "react-slick";
import ServiceNav from './ServiceNav';

const carBrands = [
  { name: "Honda", icon: <SiHonda size={25} /> },
  { name: "Audi", icon: <SiAudi size={25} /> },
  { name: "Nissan", icon: <SiNissan size={25} /> },
  { name: "Mazda", icon: <SiMazda size={25} /> },
  { name: "Toyota", icon: <SiToyota size={25} /> },
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

const DealerCar = () => {
  const [activeBrand, setActiveBrand] = useState(carBrands[0].name);
  var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <>
      <section className='service'>
        <div className='serviceHead'>
          <p>best service</p>
          <h4>Explore of top deal from out top-rated dealer</h4>
        </div>
        <ServiceNav 
          activeBrand={activeBrand} 
          carBrands={carBrands}
          setActiveBrand={setActiveBrand}
        />
        <article className='car_list'>
          <Slider {...settings}>
            {cars.map((car)=>(
              <CarCard key={car.id} car={car}/>
            ))}
          </Slider>
        </article>
      </section>
    </>
  )
}

export default DealerCar
