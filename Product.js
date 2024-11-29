import React from 'react';

function Product({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;
