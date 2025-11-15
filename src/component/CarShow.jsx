import React, { useEffect, useState } from 'react'
import '../styles/CarShow.css';
import { SlCalender } from "react-icons/sl";
import { supabase } from '../SupabaseClient/Client';




const CarShow = () => {
  const [showLink, setShowLink] = useState([]);
  const [activeShowBtn, setActiveShowBtn] = useState(null)
  const [selectCar, setSelectCar] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
    const showList = async()=>{
      try {
        setLoading(true);
        const { data, error } = await supabase
        .from('cars')
        .select('*')
        if (error) throw error
        setShowLink(data)

        //load first car type automatically
        if (data.length > 0) {
          setActiveShowBtn(data[0].id);
          fetchCarByType(data[0].type);
        }

      } catch (error) {
        console.error("Error fetching car types:", error)
      } finally {
        setLoading(false)
      }
    }
    showList();
  }, [])
  
  const fetchCarByType = async(type) =>{
    setLoading(true)
    
    try {
      const {data, error} = await supabase
      .from('cars')
      .select('*')
      .eq('type', type)

      if (error) {
        console.log(error);
        return;
      }

      if (data.length > 0){
        setSelectCar(data[0]);
      }else{
        setSelectCar(null);
      }

    } catch (error) {
        console.log(error);
    }finally {
      setLoading(false);
    }
  }

  const handleClick = (item)=>{
    setActiveShowBtn(item.id)
    fetchCarByType(item.type);
    setLoading(false)
  }

  return (
    <>
      <section className='carShowcase'>
        <div className='showcaseCon'>
          <ul>
            {showLink.map((item, index) => (
              <li key={index}>
                <button 
                  key={item.id}
                  className={
                    (activeShowBtn === item.id) ? 
                    'showcaseBtnActive' : 'showcaseBtn'}
                    onClick={() => handleClick(item)}
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
          {loading ? (
              <p>Loading....</p>
            ): selectCar ? (
              <div className='showcaseDetail'>
                <h2>{selectCar.currency}{selectCar.price_per_day}/<span>day</span></h2> 
                <table>
                    <tbody>
                    <tr>
                      <td>model</td>
                      <td>{selectCar.model}</td>
                    </tr>
                    <tr>
                      <td>Doors</td>
                      <td>{selectCar.door}</td>
                    </tr>
                    <tr>
                      <td>Seats</td>
                      <td>{selectCar.seat}</td>
                    </tr>
                    <tr>
                      <td>Luggage</td>
                      <td>{selectCar.luggage}</td>
                    </tr>
                    <tr>
                      <td>Transmission</td>
                      <td>{selectCar.transmission}</td>
                    </tr>
                    <tr>
                      <td>Air conditioning</td>
                      <td>{selectCar.air_conditioning ? "yes" : "No" }</td>
                    </tr>
                    <tr>
                      <td>minimum_age</td>
                      <td>{selectCar.age}</td>
                    </tr>
                  </tbody>
                </table>
                <button onClick={()=>handleReserve(item)}><span><SlCalender size={30}/></span>reserve Now</button>
              </div>
            ):(
              <p>No car found.</p>
            )}
        </div>
      </section>
    </>
  );
}

export default CarShow
