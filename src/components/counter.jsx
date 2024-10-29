import React, { useState } from 'react';

function App() {
  // State to keep track of the click count
  const [count, setCount] = useState(0);

  // Function to handle increment
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Function to handle decrement
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Click Counter</h1>
      <p>Current count: {count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default App;
