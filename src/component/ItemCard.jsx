import React from 'react';
import '../style/itemCard.scss';
import { Link } from 'react-router-dom';
import QuantityModifier from './QuantityModifier';

export default function ItemCard(props) {
  return (
    <div className="wrapper">
      <Link to={`/shop/${props.link}`}>
        <div className="itemCard">
          <img src={props.item.image} alt="gb" />
          <p className="itemName">{props.item.name}</p>
          <p className="itemPrice">${props.item.price}.00</p>
        </div>
      </Link>
      {props.showModifier ? (
        <QuantityModifier
          quantity={props.quantity}
          increment={props.increment}
          decrement={props.decrement}
          itemKey={props.link}
        />
      ) : null}
    </div>
  );
}
