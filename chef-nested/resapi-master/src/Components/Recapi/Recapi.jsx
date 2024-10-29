/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Recapi.css'
import { Link } from 'react-router-dom';
const Recapi = () => {
 const [resapi,setresapi]=useState([])
 useEffect(()=>{
    fetch('https://cloudy-fish-nightshirt.cyclic.cloud/resapi')
    .then(res => res.json())
    .then(data => setresapi(data))
 },[])
    return (
        <div className='mt-3'>
            <h2 className=' text-center text-4xl'>Recapi Feture</h2>
              <div className='grid mt-3'>
                {
                   resapi.map(menu => console.log(menu)) 
                }
                {
                   resapi.map(menu => <DisplayUi data={menu} key={menu.id}></DisplayUi>) 
                }
              </div>
        </div>
    );
};
function DisplayUi({data: menu}) {
   return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={menu.image_url} alt="" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{menu.meal_name}</h2>
    <p>{menu.instructions.slice(0,40)}</p>
    <div className="card-actions">
    <Link to={`/resapi/${menu.id}`}><button className="btn btn-primary">See More</button></Link>
    </div>
  </div>
</div>
    </div>
   ) 
}
export default Recapi;