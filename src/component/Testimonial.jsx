import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import avatar from '../assets/avatar.png'
import '../styles/Testimonial.css'


const testimonials = [
   {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Manager",
    image: avatar,
    message:
      "The service was excellent and the car was spotless. Booking was easy, and I loved the transparency in pricing — no hidden fees at all!",
    rating: 5,
  },
  {
    id: 2,
    name: "David Kim",
    role: "Freelance Developer",
    image: avatar,
    message:
      "Absolutely fantastic experience! The team made everything smooth from pickup to drop-off. I’ll definitely use them again.",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Amelia Thompson",
    role: "Business Consultant",
    image: avatar,
    message:
      "Professional and reliable. The inclusive pricing was a breath of fresh air compared to other rental services. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Travel Blogger",
    image: avatar,
    message:
      "One of the best car rental experiences I’ve had. Great support team, clean cars, and affordable deals across multiple locations.",
    rating: 4.9,
  },
]
const Testimonial = () => {
  return (
    <>
      <section className='testimonial'>
        <div className='testimonialHead'>
          <h3>Reviewed by People</h3>
          <h2>Clients' Testimonials</h2>
          <p>
            Certain but she but shyness why cottage. 
            Guy the put instrument sir entreaties affronting. 
            Pretended exquisite see cordially the you. Weeks 
            quiet do vexed.
          </p>
        </div>
        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={2}
            spaceBetween={20}   
            navigation
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            {testimonials.map((item, i)=>(
              <SwiperSlide key={i}>
                <div className="testCard">
                  <div className='testCardHead'>
                    <img
                        src={item.image}
                        alt={item.name}
                        className=""
                    />
                    <div>
                      <h3 className="">{item.name}</h3>
                      <p className="">{item.role}</p>
                    </div>
                  </div>
                  <p className="testDet">"{item.message}"</p>
                  <p className="testRate">
                    {"★".repeat(Math.round(item.rating))}
                  </p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </>
  )
}

export default Testimonial
