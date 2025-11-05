import React from 'react'
import '../styles/ServiceNav.css'

const ServiceNav = ({activeBrand,setActiveBrand,carBrands}) => {
  return (
    <>
      <div className='servicenav'>
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
      </div>
    </>
  )
}

export default ServiceNav
