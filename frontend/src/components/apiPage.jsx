import React from 'react';
import Header from './header';
import Card from './card';
import OpenAILogo from '../assets/OpenAI.png';
import StripeLogo from '../assets/Stripe.png';
import GoogleCloudVisionLogo from '../assets/GoogleCloudVision.png';
import TwilioLogo from '../assets/Twilio.png';
import WeatherLogo from '../assets/Weather.png';
import PayPalLogo from '../assets/PayPal.png';
import ClarifaiLogo from '../assets/Clarifai.png';
import MapboxLogo from '../assets/Mapbox.png';
import IBMWatsonLogo from '../assets/IBMWatson.png';

const APIPage = () => {
  // Sample data for APIs
  const apis = [
    {
      title: 'OpenAI API',
      description: 'Harness the power of AI to generate text, images, and more.',
      category: 'AI/ML',
      image: OpenAILogo,
    },
    {
      title: 'Stripe API',
      description: 'Integrate secure payment processing into your app.',
      category: 'Finance',
      image: StripeLogo,
    },
    {
      title: 'Google Cloud Vision API',
      description: 'Analyze images and detect objects with machine learning.',
      category: 'AI/ML',
      image: GoogleCloudVisionLogo,
    },
    {
      title: 'Twilio API',
      description: 'Programmatically send and receive messages and calls.',
      category: 'Communication',
      image: TwilioLogo,
    },
    {
      title: 'Weather API',
      description: 'Get real-time weather data for any location.',
      category: 'Weather',
      image: WeatherLogo,
    },
    {
      title: 'PayPal API',
      description: 'Integrate PayPal payment processing into your app.',
      category: 'Finance',
      image: PayPalLogo,
    },
    {
      title: 'Clarifai API',
      description: 'Leverage powerful AI models for image and video recognition.',
      category: 'AI/ML',
      image: ClarifaiLogo,
    },
    {
      title: 'Mapbox API',
      description: 'Create custom maps and navigation for your apps.',
      category: 'Geolocation',
      image: MapboxLogo,
    },
    {
      title: 'IBM Watson API',
      description: 'Integrate AI capabilities such as natural language processing.',
      category: 'AI/ML',
      image: IBMWatsonLogo,
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
};

export default APIPage;