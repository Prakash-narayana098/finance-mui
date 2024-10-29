import React, { useState } from 'react';
import './App.css';

function App() {
  // Initial cart items with names and quantities
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', quantity: 1,image:'/images/image-cake-desktop.jpg/50' },
    { id: 2, name: 'Item 2', quantity: 1,image:'/images/image-tiramisu-desktop.jpg/50'},
  ]);

  // Function to increment item quantity
  const incrementQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Function to decrement item quantity
  const decrementQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 }
      : item
    ));
  };

  return (
    <div style={{ width: '300px', margin: 'auto', marginTop: '50px' }}>
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div
          key={item.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
            alignItems: 'center',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button onClick={() => decrementQuantity(item.id)}>-</button>
            <span style={{ margin: '0 10px' }}>{item.quantity}</span>
            <button onClick={() => incrementQuantity(item.id)}>+</button>
          </div>
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
