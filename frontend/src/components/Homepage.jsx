import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
    return (
        <>
            <div className='imagesposter'>
                <img src="/images/let-enjoy-bloom.png" alt="Bloom Poster" />
            </div>


        <div className='Homepage'>

            {/* Container */}
            <div className='containerHomepage'>
                <div className='contentcafe'>

                    <div className='promotion-box'>
                        <div className='promo-box1'>
                            <img src="/images/promotion.png" alt="Promotion" />
                        </div>
                        <div className='promo-box2'>
                            <p>Buy 1, Get 1 Free! Exclusively for our customers every Friday only! Don't miss out on this special treat!</p>
                            <Link to="/" className='btn-promo1'style={{ textDecoration: 'none' }} >See more</Link>
                        </div>
                    </div>


                    <div className='product'>
                        <div className='productdrink-box1'>
                            <img src="/public/images/Meun.png" alt="Drink" />
                            <p>Make every special moment filled with happiness. Savor the delicious flavors we’ve carefully crafted just for you.</p>
                            <Link to="/drinkmenu" className='btn-product1'style={{ textDecoration: 'none' }} >View the menu</Link>
                        </div>

                        <div className='productdrink-box2'>
                            <img src="/public/images/Meun (1).png" alt="Cake" />
                            <p>Indulge in the perfect bite of happiness. Our cakes are lovingly made to bring joy to every special moment.</p>
                            <Link to="/dessertmenu" className='btn-product2' style={{ textDecoration: 'none' }} >View the menu</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>

    );
}

export default Homepage;
