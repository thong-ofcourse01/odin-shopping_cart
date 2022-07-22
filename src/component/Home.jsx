import React from 'react';
import '../style/home.scss';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div id="home">
      <Link to="/shop">
        <p id="shopBtn">GO SHOPPING</p>
      </Link>
    </div>
  );
}
