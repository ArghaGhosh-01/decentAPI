// src/components/Hero.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import illu from '../assets/illu.png';
import { useAuth0 } from "@auth0/auth0-react";

function Hero() {
  const navigate = useNavigate();
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const handleExploreClick = () => {
    navigate('/api-marketplace');
  };

  return (
    <div className="flex justify-center items-center mt-72 mx-7">
      <div className=' bg-red-800 rounded-full absolute circle2'></div>
      <div className=' bg-red-800 rounded-full absolute circle3'></div>
      <div className="flex flex-col md:flex-row w-full max-w-7xl">
        <div className="flex-1 md:order-1 order-1" style={{ flex: 3 }}>
          <div className="p-4 mt-14">
            <h2 className="text-6xl font-extrabold text-white">Full Stack, Open source</h2>
            <span className='text-6xl font-extrabold text-white'>Web3, </span>
            <span className='text-6xl font-extrabold color-theme'>APIs</span>
            <h2 className='text-6xl font-extrabold text-white mb-5'>Integration</h2>
            <span className='m-auto'>
              <button className="text-white button" onClick={handleExploreClick}>
                Explore
              </button>
              {!isAuthenticated ? (
                <button className="text-white button mx-4" onClick={() => loginWithRedirect()}>
                  Login / Signup
                </button>
              ) : (
                <button className="text-white button mx-4" onClick={() => logout({ returnTo: window.location.origin })}>
                  Logout
                </button>
              )}
            </span>
          </div>
        </div>
        <div className="flex-1 md:order-2 order-2" style={{ flex: 2 }}>
          <div className="p-4">
            <img src={illu} height='400' width='500' alt='hero' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
