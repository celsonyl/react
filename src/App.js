import React, { useState } from 'react';
import Login from './pages/Login';
import './global.css'; 

export default function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <Login />
    </div>
  );
}
