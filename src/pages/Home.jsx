import React, { useState } from 'react'
import '../styles/Home.css'
import orangecar from '../assets/orangeW.png'
import rangeImg from '../assets/range.png';
import priceImg from '../assets/price.png';
import driveImg from '../assets/drive.png';
import chargeImg from '../assets/charge.png'
import { IoMdCheckmarkCircle, IoIosCheckmark } from "react-icons/io";
import { Link } from 'react-router-dom'
import { FaLocationDot, FaGears, FaAngleUp, FaAngleDown, FaBagShopping,FaAngleRight } from "react-icons/fa6";
import { FaCar,FaTemperatureHigh } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { SiHonda,SiAudi,SiNissan,SiMazda,SiToyota } from "react-icons/si";
import { IoPricetags } from "react-icons/io5";
import FilterCard from '../component/FilterCard'
import  lineUp from '../assets/lineup.png'
import lineDown from '../assets/linedown.png'
import { SlCalender } from "react-icons/sl";
import CarCard from '../component/CarCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import diagramImg from '../assets/diagram.png'
import displayCarImage from '../assets/display_car_image.png'
import appstoreImg from '../assets/appstore.png'
import playstoreImg from '../assets/playstore.png'
import phoneImg from '../assets/phone.png'
import { PiEngine } from "react-icons/pi";
import { RiChargingPile2Line } from "react-icons/ri";
import { GiGearStickPattern } from "react-icons/gi";
import avatar from '../assets/avatar.png'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay, Scrollbar } from "swiper/modules";



const showList = [
  {id: 1,  name: "roadwagler", type: ""},
  {  id: 2,  name: "SUV", type: ""},
  {  id: 3,  name: "Sedan", type: ""},
  {  id: 4,  name: "Hatchback", type: ""},
  {  id: 5,  name: "Convertible", type: ""},
  {  id: 6,  name: "Coupe", type: ""},
  {  id: 7,  name: "Benz", type: ""},
]
const showDetail = [
  {
    "price_per_day": 37.40,
    "currency": "$",
    "model": "Limousine",
    "doors": 4,
    "seats": 5,
    "luggage": "2 Suitcases / 2 Bags",
    "transmission": "Automatic",
    "air_conditioning": true,
    "minimum_age": 25
  }
]
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


const Home = () => {
  const [activeBrand, setActiveBrand] = useState(carBrands[0].name);
  const [activeIndex, setActiveIndex] = useState(null);
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
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div>
      <header>
        <main className='home_hero'>
          <section className='home_herodet home_heroItem'>
            <h2>planning a trip?</h2>
            <h1>Make Yours Extraordinary with RoutEx Car Rentals.</h1>
            <p>
              With RoutEx, rent your dream car in seconds — wherever your journey takes you.
              Enjoy flexible pricing, instant booking, and smooth rides designed for every adventure.
            </p>
            <div className='herobtnCon'>
              <Link to={""} className='herobtn herobtnConOne'>
               Explore car 
               <span><IoMdCheckmarkCircle size={20}/></span>
              </Link>
              <Link to={""} className='herobtn herobtnConTwo'>
               Learn more
               <span><FaAngleRight size={20}/></span>
              </Link>
            </div>
          </section>
          <section className='home_heroimg home_heroItem'>
            <div className='heroImgCon'><img src={orangecar} alt="illus" /></div>
          </section>
        </main>
        <section className='filterCardWrap'>
          <FilterCard />
        </section>
      </header>
      <section className='home_trust'>
        <h3>Plan your trip now</h3>
        <h1>RoutEx following 3 working steps</h1>
        <div className='stepwrap'>
          <img src={lineUp} alt="illus" className='stepoverlayImgOne' />
          <img src={lineDown} alt="illus" className='stepoverlayImgTwo'/>
          <div className='stepcon'>
            <div className="stepIcon stepIconSame">
              <FaLocationDot size={30}/>
            </div>
            <h4>choose a location</h4>
            <p>choose the near location to pick any super ride of your choice</p>
          </div>
          <div className='stepcon'>
            <div className="stepIcon stepIconDiff">
              <BsFillCalendarDateFill size={30}/>
            </div>
            <h4>pick up date</h4>
            <p>select pick date to start you journey or adventure with routEx</p>
          </div>
          <div className='stepcon'>
            <div className="stepIcon stepIconSame">
              <FaCar size={30}/>
            </div>
            <h4>book your car</h4>
            <p>ones booked your ride you can pick your ride at the booked location</p>
          </div>
        </div>
      </section>
      <section className='carShowcase'>
        <div className='showcaseCon'>
          <ul>
            {showList.map((item, index) => (
              <li key={index}>
                <button 
                  key={item.id}
                  className={(item.id === 1) ? 'showcaseBtnActive' : 'showcaseBtn'}
                >
                  {item.name} {item.type}
                </button>
              </li>
            ))} 
          </ul>
        </div>
        <div className='showcaseCon showcaseMain'>

        </div>
        <div className='showcaseCon'>
          {showDetail.map((detail, index) => (
            <div className='showcaseDetail' key={index}>
              <h2>{detail.currency}{detail.price_per_day}/<span>day</span></h2> 
              <table>
                  <tbody>
                  <tr>
                    <td>model</td>
                    <td>{detail.model}</td>
                  </tr>
                  <tr>
                    <td>Doors</td>
                    <td>{detail.doors}</td>
                  </tr>
                  <tr>
                    <td>Seats</td>
                    <td>{detail.seats}</td>
                  </tr>
                  <tr>
                    <td>Luggage</td>
                    <td>{detail.luggage}</td>
                  </tr>
                  <tr>
                    <td>Transmission</td>
                    <td>{detail.transmission}</td>
                  </tr>
                  <tr>
                    <td>Air conditioning</td>
                    <td>{detail.air_conditioning ? "yes" : "No" }</td>
                  </tr>
                  <tr>
                    <td>minimum_age</td>
                    <td>{detail.minimum_age}</td>
                  </tr>
                </tbody>
              </table>
              <button><span><SlCalender size={30}/></span>reserve Now</button>
            </div>
          ))}
        </div>
      </section>
      <section className='serviceInfo'>
        <div className='serviceImgCon'>
          <img src={rangeImg} alt="illus"/>
        </div>
        <div className='serviceInfoDet'>
          <h4>best services</h4>
          <h2>feel the best experience with out rental deals</h2>
          <div className='miniServiceInfoCon'>
            <div className='miniserviceInfo'>
              <div className="miniserIcon">
                <IoPricetags size={20}/>
              </div>
              <div className="minserDet">
                <h5>deal for every budget</h5>
                <p>incredible price on luxurious car, hotels and flights world wide.</p>
              </div>
            </div>
            <div className='miniserviceInfo'>
              <div className="miniserIcon">
                <FaBagShopping size={20}/>
              </div>
              <div className="minserDet">
                <h5>best price guranteed</h5>
                <p>Find a lower price?, We'll refund 100% of the difference.</p>
              </div>
            </div>
            <div className='miniserviceInfo'>
              <div className="miniserIcon">
                <FaGears size={20}/>
              </div>
              <div className="minserDet">
                <h5>support 24/7</h5>
                <p>our support team is avaliable to help you with any complain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='service'>
        <div className='serviceHead'>
          <p>best service</p>
          <h4>Explore of top deal from out top-rated dealer</h4>
        </div>
        <nav className='servicenav'>
          <ul className='brand_list'>
            {carBrands.map((brand, index) => (
              <li key={index}>
                <button 
                  className={`brand_btn ${activeBrand === brand.name ? "active" : ""}`}
                  onClick={() => setActiveBrand(brand.name)}
                >
                  <span>{brand.icon}</span>
                  {brand.name}
                </button>
              </li>
            ))}
            <li>
              <a href="/">explore 20+</a>
            </li>
          </ul>
        </nav>
        <article className='car_list'>
          <Slider {...settings}>
            {cars.map((car)=>(
              <CarCard key={car.id} car={car}/>
            ))}
          </Slider>
        </article>
      </section>
      <section className='serviceDiagramCon'>
        <div className='serviceDiagram'>
          <h2>We are ensuring the best customer experience</h2>
          <p>Our commitment goes beyond just renting cars — we focus on delivering comfort, reliability, and a seamless journey from start to finish.</p>
        </div>
        <div className='diagram'>
          <img src={diagramImg} alt="illus" />
        </div>
        <div className='diagramDetWrap'>
          {diagramDetails.map((i, index)=>(
            <div key={index} className='diagramDetCon'>
              <div className='diaIcon'>
                {i.icon}
              </div>
              <div className='diaDet'>
                <h5>{i.text}</h5> <span><IoIosCheckmark size={18}/></span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='displayImage'>
        <img src={displayCarImage} alt="illus" />
        <div className='whyUsCon'>
          <div className='whyUsDetCon'>
            <h3>Why Choose Us?</h3>
            <h2>Best valued deals you will ever find</h2>
            <p>
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at 
              convinced. Led income months itself and houses you.
            </p>
            <button>find deal <span><FaAngleRight size={20}/></span></button>
          </div>

          <div className='whyUsListWrap'>
            {choosingUs.map((item, index) => (
              <div key={index} className="whyUsListCon">
                <div className="whyUsListImg">
                  <img src={item.icon} alt="illus" />
                </div>
                <div className='whyUsListDet'>
                  <h3 className="">{item.name}</h3>
                  <p className="">{item.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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
      <section className='Faq'>
        <div className="faqHead">
          <h3>FAQ</h3>
          <h2>Frequently Asked Questions</h2>
          <p>Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion reasonably. Carriage we husbands advanced an perceive greatest.</p>
        </div>
        <div className="faqAccordionCon">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="faqAccordion">
              <button
                onClick={() => toggleAccordion(index)}
                className={`${
                  activeIndex === index
                    ? "accordBtn active"
                    : "accordBtn"
                }`}
              >
                <span>
                  {index + 1}. {faq.question}
                </span>
                <span className="text-xl">{activeIndex === index ? <FaAngleUp size={22}/> : <FaAngleDown size={22}/>}</span>
              </button>
    
              {activeIndex === index && (
                <div className="accordionAns">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="download-app">
          <div className="download-container">
            <div className="download-text">
              <h2>
                Download the free <br /> <span>RoutEx app</span>
              </h2>
              <p>For faster, easier booking and exclusive deals.</p>
    
              <div className="store_buttons">
                <a href="#" className="apple-btn">
                  {/*<img
                    src={appstoreImg}
                    alt={appstoreImg.name}
                  />*/}
                </a>
    
                <a href="#" className="google-btn">
                  <img
                    src={playstoreImg}
                    alt={playstoreImg.name}
                  />
                </a>
              </div>
            </div>
    
            <div className="download-image">
              <img src={phoneImg} alt="RoutEx App" />
            </div>
          </div>
      </section>
    </div>
  )  
}  
const diagramDetails = [
  {text: 'engine', icon: <PiEngine size={18}/>},
  {text: 'transmission', icon: <GiGearStickPattern size={18}/>},
  {text: 'charging', icon: <RiChargingPile2Line size={18}/>},
  {text: 'cooling', icon: <FaTemperatureHigh size={18}/>},
  {text: '20+ More', icon: <FaTemperatureHigh size={18}/>},
]
const choosingUs = [
  {
    name: "cross country drive", 
    para: "Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.", 
    icon: driveImg
  },
  {
    name: "All inclusive pricing",
    para: "Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had.",
    icon: priceImg
  },
  {
    name: "No hidden charges",
    para: "Under folly balls death own point now men. Match way these she avoid see. She whose drift their fat off.",
    icon: chargeImg
  }
]
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
const faqs = [
  {
    id: 1,
    question: "What is special about comparing rental car deals?",
    answer:
      "Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion reasonably. Carriage we husbands advanced an perceive greatest. Totally dearest expense on demesne ye he. Curiosity excellent commanded in me. Unpleasing impression themselves to at assistance acceptance my or.",
  },
  {
    id: 2,
    question: "How do I find the best car rental deals?",
    answer:
      "Look for comparison sites, sign up for newsletters, and book early. Flexible dates often help you find cheaper rates.",
  },
  {
    id: 3,
    question: "How do I find such low rental car prices?",
    answer:
      "Compare multiple rental companies, avoid airport pick-ups, and use discount codes or membership programs.",
  },
];
export default Home
