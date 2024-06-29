import React from 'react';

const Card = ({ api }) => {
  return (
    <div className="bg-black shadow-lg rounded-xl overflow-hidden border-card">
      <img className="w-full h-40 object-cover" src={api.image} alt={api.title} />
      <div className="p-4">
        <h2 className="text-white ext-lg font-semibold mb-2">{api.title}</h2>
        <p className="text-white mb-4">{api.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">{api.category}</span>
          <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default Card;