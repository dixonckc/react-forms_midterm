import React from 'react';
import NewShopForm from './components/forms/NewShopForm';
import NewProductForm from './components/forms/NewProductForm';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>New Shop</h1>
      <NewShopForm />
      <h1>New Product</h1>
      <NewProductForm />
    </div>
  );
}

export default App;
