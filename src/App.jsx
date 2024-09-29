import React from 'react';
import { Routes, Route } from 'react-router-dom';  
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar /> 
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<ProductList />} />  
          <Route path="/cart" element={<Cart />} />      
        </Routes>
      </div>
    </>
  );
};

export default App;
