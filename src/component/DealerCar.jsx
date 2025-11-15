import React, { useEffect, useState } from 'react';
import '../styles/DealerCar.css'
import { SiHonda,SiAudi,SiNissan,SiMazda,SiToyota } from "react-icons/si";
import CarCard from '../component/CarCard';
import Slider from "react-slick";
import ServiceNav from './ServiceNav';
import { supabase } from '../SupabaseClient/Client';


const DealerCar = () => {
  const [activeType, setActiveType] = useState(null);
  const [type, setType] = useState([]);
  const [cars, setCars] = useState([])
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

  useEffect(()=>{
    const fetchBrandButton = async() =>{
      try {
        const {data, error} = await supabase
        .from('cars')
        .select("type", {distinct: true})
        if(error){
          console.log(error.message)
          return;
        }
        const uniqueTypes = [...new Set(data.map((item) => item.type))].map(
          (t, index) => ({ id: index, type: t })
        );
        setType(uniqueTypes);

        if (uniqueTypes.length > 0) {
          setActiveType(uniqueTypes[0].type);
          fetchCarsByBrand(uniqueTypes[0].type);
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchBrandButton()
  }, []);

  const fetchCarsByBrand = async (band) => {
    const { data, error } = await supabase
      .from("cars")
      .select("*")
      .eq("type", band);
      console.log(data)
    if (error) {
      console.log(error.message);
      return;
    }

    setCars(data);
  };

  const handleBrandClick = (brand) => {
    setActiveType(brand.type);
    fetchCarsByBrand(brand.type);
  };
  return (
    <>
      <section className='service'>
        <div className='serviceHead'>
          <p>best service</p>
          <h4>Explore of top deal from out top-rated dealer</h4>
        </div>
        <ServiceNav 
          activeType={activeType} 
          type={type}
          typeClick={handleBrandClick}
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
