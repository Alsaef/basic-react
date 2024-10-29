// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ResapiInfo = () => {
    const resapi=useLoaderData()
    console.log(resapi)
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={resapi.image_url} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold pb-2">{resapi.meal_name}</h1>
            <p className="pb-6">{resapi.instructions}</p>
            <p className='pb-3 font-semibold'>Category: {resapi.category}</p>
            {
                resapi.ratings.map((data,index) => <li className=' text-2xl font-semibold' key={index}><small>Coustomer Name: {data.user} </small> <small> Rating:  {data.rating}</small></li>)
            }
           <Link  to='/'> <button className="btn btn-primary mt-2">Back</button></Link>
          </div>
        </div>
      </div>
    );
};

export default ResapiInfo;