import React, { useState } from 'react';
import Product from './Product';

const initialProducts = [
  { id: 1, name: 'Ficus', price: 20, thumbnail: 'ficus.jpg', category: 'Indoor' },
  { id: 2, name: 'Succulent', price: 10, thumbnail: 'succulent.jpg', category: 'Outdoor' },
  // Add more products
];

function ProductList() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(item => item.id === product.id);
      if (existingProduct) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  return (
    <div>
      <h2>Product List</h2>
      {initialProducts.map(product => (
        <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
}

export default ProductList;
