import React, { useState } from 'react';
import './Pd.css';

const products = [
  { id: 1, name: 'สินค้า 1', price: 100, image: 's1.jpg' },
  { id: 2, name: 'สินค้า 2', price: 200, image: 's2.jpg' },
  // เพิ่มสินค้าอื่นๆ ได้ตามต้องการ
];

const Products = ({ addToCart }) => {
  return (
    <div>
      <h2>Products Page</h2>
      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: {product.price} บาท</p>
            <button onClick={() => addToCart(product)}>เพิ่มลงในตะกร้า</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
