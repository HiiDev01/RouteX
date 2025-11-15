import React, { useState } from 'react'
import '../styles/Nav.css'
import logo from '../assets/Rexlog.png'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

const navitem = [
  { name: 'Home', link: '/'},
  { name: 'About', link: '/about' },
  { name: 'vehicle model', link: '/vehicle' },
  { name: 'Services', link: '/services' },
  { name: 'testimonial', link: '/testimonial' },
  { name: 'ourteam', link: '/team' },
  { name: 'Contact', link: '/contact' },
]
const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () =>{
    setToggle(prev => !prev)
  }
  return (
    <nav className='nav'>
      <div className='nav-logo'>
        <div className='navlogImgCon'><img src={logo} alt="logo"/></div>
        <h2>RoutEx</h2>
      </div>
      <div className={`navWrapper ${toggle ? "active" : ""} `}>
        <div className='nav-items'>
          {navitem.map((item, index) => (
            <NavLink  
              key={index}  
              to={item.link} 
              className={({ isActive }) => (isActive ? 'navlinks active' : 'navlinks')}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className='nav-auth'>
          <a href='/login' className='loginbtn'>Login</a>
          <a href='/signup' className='signupbtn'>Register</a>
        </div>
      </div>
      <button onClick={handleToggle} className='hamburgerbtn'>
        <GiHamburgerMenu size={25} color='orangered'/>
      </button>
    </nav>
  )
}

export default Nav
