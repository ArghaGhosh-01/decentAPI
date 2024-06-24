// src/App.js
import React, { useState, useEffect } from 'react';

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
        <h1>{message}</h1>
        <p className='para'>okay bro</p>
      </header>
    </div>
  );
}

export default App;
