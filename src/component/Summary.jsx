import React from 'react';
import { useHistory } from 'react-router-dom';
import items from '../items';
import { Link } from 'react-router-dom';

export default function Summary(props) {
  const { cartItems } = props;
  let total = 0;
  for (let [key, value] of cartItems) {
    const itemPrice = items.get(key).price;
    const subtotal = itemPrice * value;
    total += subtotal;
  }
  const { goBack } = useHistory();
  return (
    <div id="summary">
      <p id="back" onClick={goBack}>{`< BACK`}</p>
      <p id="total">${total.toLocaleString()}.00</p>
      <Link to="/complete">
        <p id="completeBtn" onClick={() => props.reset()}>
          COMPLETE ORDER
        </p>
      </Link>
    </div>
  );
}
