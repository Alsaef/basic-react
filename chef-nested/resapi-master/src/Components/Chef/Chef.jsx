/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Chif.css'
const Chef = () => {
    const chefs=useLoaderData()
    console.log(chefs)
    return (
        <div className='container'>
            <h2 className=' text-4xl text-center font-semibold'>Top Chef</h2>
            <div className='grid2'>
                {
                    chefs.map(chef => console.log(chef))  
                }
                {
                    chefs.map(chef => <DisplayUi2 chef={chef} key={chef.id}></DisplayUi2>)  
                }
            </div>
        </div>
    );
};
function DisplayUi2({chef}) {
    return(
        <div>
          <div className="card  bg-base-100 shadow-xl">
  <figure><img src={chef.profile_image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{chef.chef_name}</h2>
    <p className=' font-semibold'>Country: {chef.country}</p>
    <p className=' font-semibold'>Experience Years: {chef.experience_years}</p>
    <div className="card-actions justify-end">
    <Link to={`/chef/${chef.id}`}><button className="btn btn-primary">See Information</button></Link>
    </div>
  </div>
</div>  
        </div>
    )
}
export default Chef;