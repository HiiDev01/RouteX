import React from 'react'
import '../styles/CarShow.css';
import { SlCalender } from "react-icons/sl";


const showList = [
  {id: 1,  name: "roadwagler", type: ""},
  {  id: 2,  name: "SUV", type: ""},
  {  id: 3,  name: "Sedan", type: ""},
  {  id: 4,  name: "Hatchback", type: ""},
  {  id: 5,  name: "Convertible", type: ""},
  {  id: 6,  name: "Coupe", type: ""},
  {  id: 7,  name: "Benz", type: ""},
 ]
const showDetail = [
   {
     "price_per_day": 37.40,
     "currency": "$",
     "model": "Limousine",
     "doors": 4,
     "seats": 5,
     "luggage": "2 Suitcases / 2 Bags",
     "transmission": "Automatic",
     "air_conditioning": true,
     "minimum_age": 25
   }
 ]
const CarShow = () => {


  return (
    <>
      <section className='carShowcase'>
        <div className='showcaseCon'>
          <ul>
            {showList.map((item, index) => (
              <li key={index}>
                <button 
                  key={item.id}
                  className={(item.id === 1) ? 'showcaseBtnActive' : 'showcaseBtn'}
                >
                  {item.name} {item.type}
                </button>
              </li>
            ))} 
          </ul>
        </div>
        <div className='showcaseCon showcaseMain'>

        </div>
        <div className='showcaseCon'>
          {showDetail.map((detail, index) => (
            <div className='showcaseDetail' key={index}>
              <h2>{detail.currency}{detail.price_per_day}/<span>day</span></h2> 
              <table>
                  <tbody>
                  <tr>
                    <td>model</td>
                    <td>{detail.model}</td>
                  </tr>
                  <tr>
                    <td>Doors</td>
                    <td>{detail.doors}</td>
                  </tr>
                  <tr>
                    <td>Seats</td>
                    <td>{detail.seats}</td>
                  </tr>
                  <tr>
                    <td>Luggage</td>
                    <td>{detail.luggage}</td>
                  </tr>
                  <tr>
                    <td>Transmission</td>
                    <td>{detail.transmission}</td>
                  </tr>
                  <tr>
                    <td>Air conditioning</td>
                    <td>{detail.air_conditioning ? "yes" : "No" }</td>
                  </tr>
                  <tr>
                    <td>minimum_age</td>
                    <td>{detail.minimum_age}</td>
                  </tr>
                </tbody>
              </table>
              <button><span><SlCalender size={30}/></span>reserve Now</button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CarShow
