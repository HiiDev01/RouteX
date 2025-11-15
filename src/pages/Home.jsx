import React, { useEffect, useState } from 'react'
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
import { IoPricetags } from "react-icons/io5";
import FilterCard from '../component/FilterCard'
import  lineUp from '../assets/lineup.png'
import lineDown from '../assets/linedown.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import diagramImg from '../assets/diagram.png'
import displayCarImage from '../assets/display_car_image.png'
import appstoreImg from '../assets/appstore.png'
import playstoreImg from '../assets/playstore.png'
import Footer from '../component/footer/Footer'
import phoneImg from '../assets/phone.png'
import { PiEngine } from "react-icons/pi";
import { RiChargingPile2Line } from "react-icons/ri";
import { GiGearStickPattern } from "react-icons/gi";
import CarShow from '../component/CarShow';
import DealerCar from '../component/DealerCar';
import Testimonial from '../component/Testimonial';
import Faq from '../component/Faq';


const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  {/*useEffect(()=>{
   const  handleFecth = async()=>{
    try {
      const {data, error} = await supabase
      .from('cars')
      .select('*')
      if(error){
        console.log('error fetching data')
        return;
      }
      console.log(data)
    } catch (error) {
      console.log(error, 'error fetching')
    }
   } 
   handleFecth();
  }, [])*/}
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
      <CarShow/>
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
      <DealerCar />
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
      <Testimonial/>
      <Faq activeIndex={activeIndex} toggleAccordion={toggleAccordion}/>
     {/* <section className="download-app">
          <div className="download-container">
            <div className="download-text">
              <h2>
                Download the free <br /> <span>RoutEx app</span>
              </h2>
              <p>For faster, easier booking and exclusive deals.</p>
    
              <div className="store_buttons">
                <a href="#" className="store_button apple-btn">
                  <img
                    src={appstoreImg}
                    alt={appstoreImg.name}
                  />
                </a>
    
                <a href="#" className="store_button google-btn">
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
      */}
      <section>
        < Footer />
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
export default Home
