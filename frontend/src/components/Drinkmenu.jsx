import React, { useState } from 'react';
import './Drinkmenu.css';

function Drinkmenu() {
  const colddrinks = [
    { name: 'ชาเขียว', image: '/images/59f985a550f267074449860880364ee8.jpg', price: '75 บาท' },
    { name: 'โกโก้', image: '/images/399f758f8911c35d25bf7f6ffa9c7153.jpg', price: '60 บาท' },
    { name: 'กาแฟฟูฟ่อง', image: '/images/859f4332e8f377bd1872e62901cae2f3.jpg', price: '80 บาท' },
    { name: 'มัทฉะนมสด', image: '/images/d69240a1404570c0f049e52c340eb060.jpg', price: '100 บาท' },
    { name: 'กาแฟมิ้นท์', image: '/images/cacf2b021ddc7dcf6aecada76b9fea6b.jpg', price: '100 บาท' },
    { name: 'อัญชันเลม่อน', image: '/images/f3b9f7fd28cc95d9734e3d30b81b2a31.jpg', price: '75 บาท' },
  ];

  const hotdrinks = [
    { name: 'มัทฉะนมสด', image: '/images/aa2c55816071708722ceb7e01f56c193.jpg', price: '80 บาท' },
    { name: 'มอคค่า', image: '/images/f579c68ae099ce6b04c325a2cc5e5e54.jpg', price: '70 บาท' },
    { name: 'คาปูชิโน่', image: '/images/fb288752f18436bfb42ecbb268b9d6be.jpg', price: '85 บาท' },
    { name: 'ช็อกโกแลตฟองนม', image: '/images/acd2a71b1065296cb47a3c1d040cca93.jpg', price: '60 บาท' },
  ];

  
  const [coldQuantities, setColdQuantities] = useState(colddrinks.map(() => 1));
  const [hotQuantities, setHotQuantities] = useState(hotdrinks.map(() => 1));

  const handleQuantityChange = (index, value, isCold) => {
    if (isCold) {
      const newQuantities = [...coldQuantities];
      newQuantities[index] = Math.max(1, value);
      setColdQuantities(newQuantities);
    } else {
      const newQuantities = [...hotQuantities];
      newQuantities[index] = Math.max(1, value);
      setHotQuantities(newQuantities);
    }
  };

  return (
    <div className="drink-menu-container">
      <div className="imagesposter">
        <img src="/images/let-enjoy-bloom.png" alt="Bloom Poster" />
      </div>

      <div className="containermenu">
        <h2 className="headercolddrink">เครื่องดื่มเย็น</h2>
        <div className="colddrinkmenu">
          {colddrinks.map((colddrink, index) => (
            <div key={index} className="colddrinkmenu-item">
              <img src={colddrink.image} alt={colddrink.name} />
              <p className="colddrinkname">{colddrink.name}</p>
              <p className="colddrinkprice">ราคา: <span className="price-value">{colddrink.price}</span></p>
              <button className="btn-menu" onClick={() => handleBuyClick(colddrinkt.name)}>ซื้อ</button>
              <div className="quantity-selector">
                <button className="quantity-btn" onClick={() => handleQuantityChange(index, coldQuantities[index] - 1, true)}>-</button>
                <input 
                  type="number" 
                  value={coldQuantities[index]} 
                  onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 1, true)}
                  className="quantity-input"
                />
                <button className="quantity-btn" onClick={() => handleQuantityChange(index, coldQuantities[index] + 1, true)}>+</button>
              </div>
            </div>
          ))}
        </div>

        <h2 className='headerhotdrink'>เครื่องดื่มร้อน</h2>
        <div className="hotdrinktmenu">
          {hotdrinks.map((hotdrink, index) => (
            <div key={index} className="hotdrinktmenu-item">
              <img src={hotdrink.image} alt={hotdrink.name} />
              <p className="hotdrinkname">{hotdrink.name}</p>
              <p className="hotdrinktprice">ราคา: <span className="price-value">{hotdrink.price}</span></p>
              <button className="btn-menu" onClick={() => handleBuyClick(hotdrink.name)}>ซื้อ</button>
              <div className="quantity-selector">
                <button className="quantity-btn" onClick={() => handleQuantityChange(index, hotQuantities[index] - 1, false)}>-</button>
                <input 
                  type="number" 
                  value={hotQuantities[index]} 
                  onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 1, false)}
                  className="quantity-input"
                />
                <button className="quantity-btn" onClick={() => handleQuantityChange(index, hotQuantities[index] + 1, false)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Drinkmenu;
