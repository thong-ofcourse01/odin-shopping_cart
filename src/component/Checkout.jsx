import React, { useEffect } from 'react';
import items from '../items';
import ItemCard from './ItemCard';
import Summary from './Summary';
import '../style/checkout.scss';

export default function Checkout(props) {
  const { cartItems } = props;

  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Checkout';
    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <div id="checkout">
      <div id="cartItems">
        {[...cartItems.keys()].map((key) => {
          return (
            <ItemCard
              item={items.get(key)}
              key={key}
              link={key}
              showModifier={true}
              quantity={cartItems.get(key) || 0}
              increment={props.incrementCart}
              decrement={props.decrementCart}
            />
          );
        })}
      </div>
      {cartItems.size === 0 ? (
        <div id="emptyCartInfo">
          <p>Your Cart is Empty</p>
        </div>
      ) : (
        <Summary cartItems={cartItems} reset={props.resetCart} />
      )}
    </div>
  );
}
