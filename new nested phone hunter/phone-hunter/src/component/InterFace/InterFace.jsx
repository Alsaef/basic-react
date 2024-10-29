/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const InterFace = () => {
    const phones=useLoaderData()
    console.log(phones)
    return (
        <section className=' mx-auto w-3/4'>
            <div className='grid grid-rows-5 grid-flow-col gap-4 mt-6'>
          {
           phones.map(data=><Iphone key={data.id} data={data}></Iphone>) 
          }
        </div>
        </section>
    );
};

function Iphone({data}) {
    return (
        <div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={data.picture} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Brand: {data.brand}</h2>
    <h3 className="card-title">{data.name}</h3>
    <div className="card-actions">
    <Link to={`/phone/${data.id}`}>  <button className="btn btn-primary">See More</button></Link>
    </div>
  </div>
</div>
        </div>
    )
}
export default InterFace;