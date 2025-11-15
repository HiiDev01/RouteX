import React from 'react'
import '../styles/ServiceNav.css'

const ServiceNav = ({activeType, type, typeClick}) => {
  return (
    <>
      <div className='servicenav'>
        <ul className='brand_list'>
          {type.map(brand => (
            <li key={brand.id}>
              <button 
                className={`brand_btn ${activeType === brand.type ? "active" : ""}`}
                onClick={() => typeClick(brand)}
              >
                {brand.type}
              </button>
            </li>
          ))}
          <li>
            <a href="/vehicle">explore 20+</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ServiceNav
