/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
const More = () => {
    const loade=useLoaderData()
    console.log(loade)
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={loade.picture} className="max-w-sm rounded-lg shadow-2xl" />
    <div className='p-2'>
      <h1 className="text-5xl font-bold">{loade.name}</h1>
      <h3 className="py-6 text-xl font-bold">Price: {loade.price}</h3>
      <h3 className="py-6 text-xl font-bold">Release Date: {loade.release_date}</h3>
    <div>
        <h3 className=' text-4xl py-2'>features</h3>
        {
        loade.features.map(data => <li className=' font-semibold'>{data}</li>)
      }
    </div>
      <button className="btn btn-primary mt-2"><Link to='/'>Back Home</Link></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default More;