import React from 'react';

const Card = ({ api }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <div className="flex justify-center items-center bg-white" style={{ height: '200px' }}>
        <img
          src={api.image}
          alt={api.title}
          className="object-contain"
          style={{ height: '200px', width: '200px' }}
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{api.title}</h2>
        <p className="text-gray-600 mb-4">{api.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">{api.category}</span>
          <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default Card;