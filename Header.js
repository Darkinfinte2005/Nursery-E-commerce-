import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cartItems }) {
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          Cart ({totalItems})
        </Link>
      </nav>
    </header>
  );
}

export default Header;
