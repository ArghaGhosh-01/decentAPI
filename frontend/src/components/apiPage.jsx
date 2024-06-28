import React from 'react';
import Header from './header';
import Card from './card';

const APIPage = () => {
  // Sample data for APIs
  const apis = [
    {
      title: 'Weather API',
      description: 'Get real-time weather data for any location.',
      category: 'Weather',
      image: 'https://via.placeholder.com/600x400', // Replace with actual image path
    },
    {
      title: 'Payment Gateway API',
      description: 'Integrate secure payment processing into your app.',
      category: 'Finance',
      image: 'https://via.placeholder.com/600x400', // Replace with actual image path
    },
    {
      title: 'Image Recognition API',
      description: 'Analyze images and detect objects with machine learning.',
      category: 'AI/ML',
      image: 'https://via.placeholder.com/600x400', // Replace with actual image path
    },
  ];

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apis.map((api, index) => (
            <Card key={index} api={api} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default APIPage;
