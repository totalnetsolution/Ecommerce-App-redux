import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotal, removeFromCart } from '../features/cart/cartSlice';

const Cart = () => {
  const cartItems = useSelector(selectCartItems); 
  const totalAmount = useSelector(selectCartTotal);  
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return <p>Your cart is empty</p>;
  }

  return (
    <div className="container">
      <h2 className="text-center my-4">Your Cart</h2>
      <div className="row">
        <div className="col-md-8">
          <ul className="list-group mb-4">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.title}</h5>
                  <p>Price: ${item.price} x {item.quantity} = ${item.totalPrice.toFixed(2)}</p>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(removeFromCart(item.id))}  
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-4">
          <h4>Total Amount: ${totalAmount.toFixed(2)}</h4>
        </div>
      </div>
    </div>
  );
};

export default Cart;
