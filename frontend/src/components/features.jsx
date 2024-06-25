// src/Feature.js
import React from 'react';

const features = [
  {
    icon: '★', // Replace this with your own icon
    heading: "Feature 1",
    description: "This is the description for feature 1.",
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s', // Replace with actual image path
  },
  {
    icon: '🚀', // Replace this with your own icon
    heading: "Feature 2",
    description: "This is the description for feature 2.",
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s', // Replace with actual image path
  },
  {
    icon: '⚙️', // Replace this with your own icon
    heading: "Feature 3",
    description: "This is the description for feature 3.",
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s', // Replace with actual image path
  },
  {
    icon: '⚙️', // Replace this with your own icon
    heading: "Feature 4",
    description: "This is the description for feature 4.",
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s', // Replace with actual image path
  },
];

function Feature() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-xl mt-36">
      <h1 className="text-white text-4xl text-center mb-8 font-bold">Our Key <span className='color-theme'>Features</span></h1>
      <div className="grid grid-cols-1 gap-0">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative bg-black my-10 rounded-lg shadow-lg flex ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse' 
            } items-center`}
          >
            <div className="flex-1 flex justify-center items-center">
              <img
                src={feature.imgSrc}
                key={index}
                alt={feature.heading}
                className="h-60 w-60 object-cover rounded-lg "
              />
            </div>
            <div className="flex-1 text-center flex flex-col items-center ">
              <h3 className="text-xl font-semibold text-white mb-2">{feature.heading}</h3>
              <p className="text-white">{feature.description}</p>
              <span className='mt-4'>
            <button className="text-white button">
            Docs
          </button>
          <button className="text-white mx-4">
            Login /Signup
          </button>
            </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
