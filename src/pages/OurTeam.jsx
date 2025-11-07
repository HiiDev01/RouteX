import React from "react";
import "../styles/OurTeam.css";
import { FaFacebookF, FaTwitter, FaDribbble } from "react-icons/fa";
import { IoStar, IoCallSharp } from "react-icons/io5";
import Testimonial from "../component/Testimonial";
import Footer from "../component/footer/Footer";
import  team1 from '../assets/team1.png'
import  team2 from '../assets/team2.png'
import  team3 from '../assets/team3.png'
import  team4 from '../assets/team4.png'

const teamMembers = [
  {
    name: "Luke Miller",
    role: "Creative Lead",
    image: team1,
  },
  {
    name: "Michael Diaz",
    role: "Product Owner",
    image: team2,
  },
  {
    name: "Briana Ross",
    role: "Photographer",
    image: team3,
  },
];

const OurTeam = () => {
  return (
    <>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-img">
              <img src={member.image} alt={member.name} />
              <div className="overlay">
                <div className="social-icons">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaDribbble />
                </div>
              </div>
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
      <Testimonial/>
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
    </>
  );
};

export default OurTeam;
