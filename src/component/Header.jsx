import React, { useState, useEffect } from 'react';
import '../style/header.scss';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export default function Header(props) {
  const [isDim, setIsDim] = useState(false);

  useEffect(() => {
    if (props.itemCount == '0') {
      return;
    }
    setIsDim(true);
    setTimeout(() => {
      setIsDim(false);
    }, 200);
  }, [props.itemCount]);

  return (
    <header>
      <Link to="/">
        <h1>NSFW SHOP</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
        </ul>
      </nav>
      <Link to="/checkout">
        <div id="cart" className={isDim ? 'dim' : ''}>
          <FaShoppingCart id="cartIcon" />
          <p id="cartCount">{props.itemCount}</p>
        </div>
      </Link>
    </header>
  );
}
