import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartQuantity } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const totalQuantity = useSelector(selectCartQuantity);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Ecommerce
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart ({totalQuantity})
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
