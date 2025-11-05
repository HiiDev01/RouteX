import React from "react";
import { FaSquareFacebook, FaTiktok, FaGooglePlusG, FaYoutube } from "react-icons/fa6";
import "./Footer.css";

const footerData = [
  {
    title: "Our Products",
    links: ["Career", "Hotels", "Cars", "Packages", "Features", "Priceline™"],
  },
  {
    title: "About RentalX",
    links: [
      "Why RentalX",
      "Our Story",
      "Investor Relations",
      "Press Center",
      "Advertise",
    ],
  },
  {
    title: "Resources",
    links: [
      "Download",
      "Help Center",
      "Guides",
      "Partner Network",
      "Developers",
      "Mechanics",
      "Cruises",
    ],
  },
  {
    title: "Extras",
    links: [
      "Rental Deal",
      "Repair Shop",
      "View Booking",
      "Hire Companies",
      "New Offers",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {footerData.map((section, index) => (
          <div className="footer-column" key={index}>
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter Section */}
        <div className="footer-column newsletter">
          <h3>Newsletter</h3>
          <div className="newsletter-input">
            <input type="email" placeholder="Email address" />
            <button>→</button>
          </div>
          <p className="rating">4.7 rating 145,761 clients</p>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <a href="#" className="clutch-link">
            4.7 Rating on Clutch
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <h2 className="footer-logo">RoutEx</h2>
        <div className="footer-links">
          <a href="#">Reviews</a>
          <a href="#">Services</a>
          <a href="#">Partners</a>
          <a href="#">Feedbacks</a>
          <a href="#">Booking</a>
        </div>
        <div className="social-icons">
          <span><FaSquareFacebook size={25}/></span>
          <span><FaTiktok size={25}/></span>
          <span><FaGooglePlusG size={25}/></span>
          <span><FaYoutube size={25}/></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
