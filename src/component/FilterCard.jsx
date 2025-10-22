import React, { useState } from 'react'
import { FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import { MdDateRange } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import "react-datepicker/dist/react-datepicker.css";
import '../styles/FilterCard.css'


const FilterCard = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <section className='filtercard'>
      <h2>Book a car</h2>
      <form action="">
        <div className='filtercardItem'>
          <div className='filterCardCon'>
            <label htmlFor="">
              <span><FaCar size={20} /></span>
              select car type
            </label>
            <select name="" id="">
              <option value="" disabled>Select a car type</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
            </select>
          </div>
          <div className='filterCardCon'>
            <label htmlFor="">
              <span><FaLocationDot size={20} /></span>
              pick-up location
            </label>
            <select name="" id=""  defaultValue="">
              <option value="" disabled>choose location</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
            </select>
          </div>
          <div className='filterCardCon'>
            <label htmlFor="">
              <span><MdDateRange size={20} /></span>
              pick-up date
            </label>
            <div className='dateCon'>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/mm/yyyy"
                className="datePickerInput"
              />
            </div>
          </div>
          <div className='filterCardCon'>
            <label htmlFor="">
              <span><MdDateRange size={20} /></span>
              return date
            </label>
            <div className='dateCon'>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/mm/yyyy"
                className="datePickerInput"
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
