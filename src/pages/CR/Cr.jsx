import React from 'react';
import './Cr.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Carts Page</h2>
      <div className="cart-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: {item.price} บาท</p>
            <button onClick={() => removeFromCart(item.id)}>ลบออกจากตะกร้า</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p>จำนวนสินค้าที่อยู่ในตะกร้า: {cartItems.length}</p>
        <p>ราคารวม: {totalPrice} บาท</p>
        <button>ไปชำระเงิน</button>
      </div>
    </div>
  );
};

export default Cart;
