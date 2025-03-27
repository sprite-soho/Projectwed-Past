import React, { useState } from 'react';
import './Dessertmenu.css';

function Dessertmenu() {
  const desserts = [
    { name: 'เค้กสตรอเบอรี่', image: '/images/8da087a473f5f1d9f4ee8f69b7797843.jpg', price: '120 บาท' },
    { name: 'วาฟเฟิลไอติม', image: '/images/0a59d89180791b2768e77a7790694394.jpg', price: '90 บาท' },
    { name: 'วาฟเฟิลเนยสด', image: '/images/1036ffc63aa0c82f4f4abe30ec71c1c7.jpg', price: '80 บาท' },
    { name: 'แพนเค้ก', image: '/images/5f63a47e120e4b2328b36655a0f7a9d6.jpg', price: '100 บาท' },
    { name: 'ครัวซ็องช็อกโกแล็ต', image: '/images/75992e171470979d7b521b654f0b1794.jpg', price: '110 บาท' }
  ];

  const [quantities, setQuantities] = useState(desserts.map(() => 1));

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, value);
    setQuantities(newQuantities);
  };

  return (
    <div className="dessert-menu-container">
      <div className="imagesposter">
        <img src="/images/let-enjoy-bloom.png" alt="Bloom Poster" className="poster-image" />
      </div>

      <div className="containerDessertmenu">
        <h2 className="headerDessert">เมนูของหวาน</h2>

        <div className="Dessertmenu">
          {desserts.map((dessert, index) => (
            <div key={index} className="Dessertmenu-item">
              <img src={dessert.image} alt={dessert.name} className="dessert-image" />
              <p className="Dessertmenuname">{dessert.name}</p>
              <p className="Dessertprice">ราคา: <span className="price-value">{dessert.price}</span></p>
              <button className="btn-menu" onClick={() => handleBuyClick(dessert.name)}>ซื้อ</button>
              <div className="quantity-selector">
                <button className="quantity-btn" onClick={() => handleQuantityChange(index, quantities[index] - 1)}>-</button>
                <input
                  type="number"
                  value={quantities[index]}
                  onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 1)}
                  className="quantity-input"
                />
                <button className="quantity-btn" onClick={() => handleQuantityChange(index, quantities[index] + 1)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dessertmenu;
