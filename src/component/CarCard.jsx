import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaGauge, FaGasPump } from "react-icons/fa6";
import { GiGearStickPattern } from "react-icons/gi";
import '../styles/CarCard.css'

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <div className="car-card-img">
        <img src={car.image} alt={car.name} />
        <span className="fav-icon">
          {car.isFavourite ? (
            <FaHeart color="orange"  size={20}/>
          ) : (
            <FaRegHeart color="gray" size={20}/>
          )}
        </span>
      </div>

      <div className="car-card-info">
        <span className="car-year">{car.year}</span>
        <h3>{car.name}</h3>
        <div className="cardprice">
          <span className="main-price">${car.price.toLocaleString()}</span>
          <span className="per-month">| ${car.monthly}/month</span>
        </div>

        <div className="car-details">
          <span><FaGauge size={18}/> {car.mileage}k</span>
          <span><GiGearStickPattern size={18}/> {car.transmission}</span>
          <span><FaGasPump size={18}/> {car.fuel}</span>
        </div>

        <button className="rent-btn">Rent Now</button>
      </div>
    </div>
  );
};

export default CarCard;
