import React from 'react'
import '../styles/Contact.css';
import { FaBlenderPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { CiInboxIn } from "react-icons/ci";
import { IoCallSharp } from "react-icons/io5";
import Footer from '../component/footer/Footer';

const Contact = () => {
  return (
    <main className='contact'>
      <section>
        <iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=London+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.mapsdirections.info/it/calcola-la-popolazione-su-una-mappa/">popolazione comuni Italia mappa interattiva</a></iframe>
      </section>
      <section className='contactSec'>
        <div className='contacts contactDetail'>
          <h2>Need additional information?</h2>
          <p className='contactparatxt'>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
          <div className='contactInfo'>
            <p> <FaBlenderPhone size={25} className='contactInfoIcon'/> (562) 498-4600</p>
            <p> <IoMailSharp size={25} className='contactInfoIcon'/> xyz@routExrental.com</p>
            <p> <FaHome size={25} className='contactInfoIcon'/> Level 2, 130 queen Street Melbourne, 1000, London</p>
          </div>
        </div>
        <div className='contacts ContactForm'>
          <form action="">
            <div className='contactField'>
              <label htmlFor="">Full Name  <sup>*</sup></label>
              <input type="text" name="" id=""/>
            </div>
            <div className='contactField'>
              <label htmlFor="">Email Address <sup>*</sup></label>
              <input type="email" name="" id=""/>
            </div>
            <div className='contactField'>
              <label htmlFor="">Tell us about it <sup>*</sup></label>
              <textarea name="" id="" rows={10}></textarea>
            </div>
            <button type="submit">
              <CiInboxIn size={25}/> Send Message
            </button>
          </form>
        </div>
      </section>
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

export default Contact
