// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Feature from './components/features';
import Footer from './components/footer';
import APIPage from './components/apiPage';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/message')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching the message:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
    
        <Navbar />
        <Hero />
        <Feature/>
        <APIPage />
        <h1>{message}</h1>
        <p className='para'>okay bro</p>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
