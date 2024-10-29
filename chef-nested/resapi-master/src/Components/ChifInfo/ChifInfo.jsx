// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ChifInfo = () => {
    const chef=useLoaderData()
    console.log(chef)
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 mx-auto w-10/12">
  <div className="hero-content flex-col lg:flex-row items-center ">
    <img src={chef.profile_image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{chef.chef_name}</h1>
      <p className="pt-2">Country: {chef.country}</p>
      <p className="pb-2">Experience Years: {chef.experience_years}</p>
      <p className="pb-2">Specialty: {chef.specialty}</p>
     <Link to='/chef'><button className="btn btn-primary">Go Back</button></Link>
    </div>
    <div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{chef.best_recipe.recipe_name}!</h2>
  </div>
  <figure><img src={chef.best_recipe.recipe_image} alt="Shoes" /></figure>
</div>
  </div>
</div>

        </div>
    );
};

export default ChifInfo;