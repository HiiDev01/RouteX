import React, { useState } from 'react'
import { FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import { MdDateRange } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import "react-datepicker/dist/react-datepicker.css";
import '../styles/FilterCard.css'
import { supabase } from '../SupabaseClient/Client';
import { Navigate, useNavigate } from 'react-router-dom';


const FilterCard = () => {
  const navigate = useNavigate()
  const [filterForm, setFilterForm] = useState({
    carType: " ",
    carLocation: " ",
    startDate: null,
    endDate: null
  })

  
  const handleFilterChange = (e) =>{
    setFilterForm({
      ...filterForm,
      [e.target.name]: e.target.value,
    })
  }
  const handleStartDate = (date) =>{
    setFilterForm({
      ...filterForm,
      startDate: date
    })
  }
  const handleEndDate = (date) =>{
    setFilterForm({
      ...filterForm,
      endDate: date
    })
  }
  const handleFilter = async (e) =>{
    e.preventDefault()
    
    const queryParams = new URLSearchParams({
      carType: filterForm.carType,
      carLocation: filterForm.carLocation
    }).toString();
    navigate(`/vehicle?${queryParams}`)
  }
  
  return (
    <section className='filtercard'>
      <h2>Book a car</h2>
      <form action="" onSubmit={handleFilter}>
        <div className='filtercardItem'>
          <div className='filterBox'>
            <label htmlFor="">
              <span><FaCar size={20} /></span>
              select car type
            </label>

            <select 
              name="carType"
              value={filterForm.carType}
              onChange={handleFilterChange}
            >
              <option value="">Select a car type</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
            </select>
          </div>

          <div className='filterBox'>
            <label htmlFor="">
              <span><FaLocationDot size={20} /></span>
              pick-up location
            </label>
            <select 
              name="carLocation" 
              value={filterForm.carLocation} 
              onChange={handleFilterChange}
            >
              <option value="" >choose location</option>
              <option value="London">London</option>
              <option value="Manchester">Manchester</option>
            </select>
          </div>

          <div className='filterBox'>
            <label htmlFor="">
              <span><MdDateRange size={20} /></span>
              pick-up date
            </label>
            <div className='dateCon'>
              <input type='date'
                selected={filterForm.startDate}
                onChange= {handleStartDate}
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/mm/yyyy"
              />
            </div>
          </div>

          <div className='filterBox'>
            <label htmlFor="">
              <span><MdDateRange size={20} /></span>
              return date
            </label>
          
            <div className='dateCon'>
              <input type='date'
                selected={filterForm.endDate}
                onChange={handleEndDate}
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/mm/yyyy"
              />
            </div>
          </div>
          <button type="submit" className='submitFilterbtn'>
            search
            <span><IoSearch size={20}/></span>
          </button>
        </div>
      </form>
    </section>
  )
}

export default FilterCard
