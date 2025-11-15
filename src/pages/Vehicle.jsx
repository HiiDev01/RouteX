import React, { useEffect, useState } from 'react'
import { FaCarSide, FaSuitcase, FaChair } from "react-icons/fa";
import { IoStar, IoCallSharp } from "react-icons/io5";
import { IoIosCheckmarkCircle,IoMdCheckmarkCircle } from "react-icons/io";
import { GiCarSeat,GiGearStickPattern } from "react-icons/gi";
import inboxIcon1 from '../assets/iconbox-image_01.png'
import inboxIcon2 from '../assets/iconbox-image_02.png'
import inboxIcon3 from '../assets/iconbox-image_03.png'
import Steps from '../component/Steps';
import '../styles/Vehicle.css';
import Footer from '../component/footer/Footer';
import { useLocation } from 'react-router-dom';
import { supabase } from '../SupabaseClient/Client';


const Vehicle = () => {
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
    name: "Audi A3",
    price: 75,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    type: "Sedan",
    luggage: 2,
    seats: 5,
    rating: 5,
    transmission: "manual"
  },
  {
    id: 2,
    name: "Volkswagen Polo",
    price: 75,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    type: "Sedan",
    luggage: 2,
    seats: 5,
    rating: 5,
    transmission: "automatic"
  },
  {
    id: 3,
    name: "Volkswagen Golf",
    price: 75,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    type: "Sedan",
    luggage: 2,
    seats: 5,
    rating: 5,
    transmission: "automatic"
  },
  ];
  const [vehicle, setVehicle] = useState([]);
  const [loading, setLoading] = useState(false)
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)
  const carType = queryParams.get('carType');
  const carLocation = queryParams.get('carLocation');

  useEffect(()=>{
    const fetchVehicle = async()=>{
      try {
        let filters = supabase.from('cars').select('*')
        if(carType){
          filters = filters.eq('type', carType)
        }
        if (carLocation) {
          filters = filters.eq("location", carLocation);
        }

        const {data, error} = await filters
        if(error){
          console.error("Error fetching cars:", error);
          return;
        }else{
          setVehicle(data);
        } 
      } catch (error) {
        console.log('error occur in fetchvehicle')
      }
    }

    fetchVehicle();
    
  }, [carType, carLocation])

  return (
    <main className='vehicle'>
      <section className='vechileCon'>
        {vehicle.length === 0 ? (
          <p>no vechile avaliable</p>
        ):(
          <>
            {vehicle.map((car) => (
              <div className="vehicle-card" key={car.id}>
                <img src={car.image} alt={car.name} className="vehicle-image" />
                <div className="car-info">
                  <div className='car-infoHead'>
                    <div>
                      <h3>{car.name}</h3>
                      <div className="rating">
                        {Array.from({ length: car.rating }, (_, index) => (
                          <IoStar key={index} size={20} className='ratingIcon'/>
                        ))}
                      </div>
                    </div>
                    <div className="price">
                      <h2>${car.price_per_day}</h2>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="details">
                    <p>
                      <FaCarSide size={20}/> {car.type}
                    </p>
                    <p>
                      <FaSuitcase size={20}/> {car.luggage} Luggage
                    </p>
                    <p>
                      <GiCarSeat size={20}/> {car.seats} Seats
                    </p>
                    <p>
                      <GiGearStickPattern size={20}/> {car.transmission} 
                    </p>
                  </div>
      
                  <button className="book-btn">
                    Book Ride <IoIosCheckmarkCircle />
                  </button>
                </div>
              </div>
            ))}
          </>
        )
      }
      </section>
      <section className='overlayContent'>
        <div className="backgroundOverlay">
          <h2>Save big with our cheap car <br /> rental! Local Suppliers. 24/7 Support.</h2>
          <a href='/'>book ride <IoMdCheckmarkCircle size={25}/></a>
        </div>
      </section>
      <Steps steps={steps}/>
      <section className='Dbooking'>
        <div className='DbookingCon'>
          <h2>Book a car by getting in <br /> touch with us</h2>
          <div>
            <p><IoCallSharp size={25}/>call to book</p>
            <h3>(562) 498-4600</h3>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  )
}

export default Vehicle
