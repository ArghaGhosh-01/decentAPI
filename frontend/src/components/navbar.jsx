// src/Navbar.js
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black p-10">
    <div className='h-20 w-20 bg-red-800 rounded-full absolute circle1'></div>
      <div className="container mx-auto flex justify-between items-center">
        <div className=" text-3xl font-black mx-7">
            <span className='text-white'>decent</span><span className='color-theme'>API</span>
        </div>
        <div className="hidden md:flex">
          <button className="text-white mx-10">
            Home
          </button>
          <button className="text-white mx-10">
            About
          </button>
          <button className="text-white mx-10 button">
            Contact Us
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <button className="block text-white p-2 hover:bg-gray-700">
            Home
          </button>
          <button className="block text-white p-2 hover:bg-gray-700">
            About
          </button>
          <button className="block text-white p-2 hover:bg-gray-700">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
