import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotal, removeFromCart } from '../features/cart/cartSlice';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  return (
    <div className="card mt-5">
      <div className="card-body">
        <h3>Cart</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul className="list-group">
              {cartItems.map((item) => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                  <div>
                    <h5>{item.name}</h5>
                    <p>
                      ${item.price} x {item.quantity} = ${item.totalPrice}
                    </p>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <h4 className="mt-4">Total: ${totalAmount}</h4>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
