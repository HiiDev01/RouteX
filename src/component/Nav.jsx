import React from 'react'
import '../styles/Nav.css'
import logo from '../assets/Rexlog.png'
import { NavLink } from 'react-router-dom'

const navitem = [
  { name: 'Home', link: '/'},
  { name: 'About', link: '/about' },
  { name: 'vehicle model', link: '/vehiclemodel' },
  { name: 'Services', link: '/services' },
  { name: 'testimonial', link: '/testimonial' },
  { name: 'ourteam', link: '/ourteam' },
  { name: 'Contact', link: '/contact' },
]
const Nav = () => {
  return (
    <nav className='nav'>
      <div className='nav-logo'>
        <div className='navlogImgCon'><img src={logo} alt="logo"/></div>
        <h2>RoutEx</h2>
      </div>
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
        <a href='/' className='signupbtn'>Register</a>
      </div>
    </nav>
  )
}

export default Nav
