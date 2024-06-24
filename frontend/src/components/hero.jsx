// src/Hero.js
import React from 'react';
import illu from '../assets/illu.png';

function Hero() {
  return (
    <div className="flex justify-center items-center mt-40 mx-7">
     <div className=' bg-red-800 rounded-full absolute circle2'></div>
      <div className="flex flex-col md:flex-row w-full max-w-7xl">
        <div className="flex-1 md:order-1 order-1" style={{ flex: 3 }}>
          <div className="p-4">
            {/* Left section content goes here */}
            <h2 className="text-6xl font-extrabold text-white">Full Stack, Open source</h2>
            <span className='text-6xl font-extrabold text-white'>Web3, </span><span className='text-6xl font-extrabold color-theme'>APIs</span>
            <h2 className='text-6xl font-extrabold text-white mb-5'>Integration</h2>
            <span className='m-auto'>
            <button className="text-white button">
            Explore
          </button>
          <button className="text-white button mx-4">
            Login /Signup
          </button>
            </span>
          </div>
        </div>
        <div className="flex-1 md:order-2 order-2" style={{ flex: 2 }}>
          <div className="p-4">
          <img src={illu} height='400' width='500' alt='hero'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;