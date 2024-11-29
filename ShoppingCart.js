import React from 'react';

function ShoppingCart({ cartItems, onRemove, onChangeQuantity }) {
  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.thumbnail} alt={item.name} />
          <p>{item.name}</p>
          <p>${item.price}</p>
          <button onClick={() => onChangeQuantity(item.id, item.quantity - 1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onChangeQuantity(item.id, item.quantity + 1)}>+</button>
          <button onClick={() => onRemove(item.id)}>Remove</button>
        </div>
      ))}
      <p>Total: ${totalCost}</p>
      <button>Continue Shopping</button>
      <button>Checkout</button>
    </div>
  );
}

export default ShoppingCart;
