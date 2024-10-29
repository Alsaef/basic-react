// eslint-disable-next-line no-unused-vars
import React from 'react';
import Recapi from '../Recapi/Recapi';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?w=900&t=st=1692769036~exp=1692769636~hmac=568ed32a9709b071c9e6d8a09e79198486c38c7211f080fba2a37cbdbbdf8e64)' }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Resepi Master </h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Link to='/chef'><button className="btn btn-primary">See Top Chef</button></Link>
    </div>
  </div>
</div>
    <Recapi></Recapi>
        </div>
    );
};

export default Home;