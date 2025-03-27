import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Header.css'
import Register from './components/Register';
import Homepage from './components/Homepage';
import Drinkmenu from './components/Drinkmenu';
import Login from './components/Login';
import Dessertmenu from './components/Dessertmenu';
import OrderButton from './components/OrderButton'
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <div className='Homepage'>

        <header className='header'>
          <nav className='navbar'>
            <div className='logo'>
              <Link to="/" style={{ textDecoration: 'none' ,fontWeight: "bold", fontSize: "26px",color: 'rgb(3, 67, 48)' }}>PA <br />ST</Link>
            </div>

            <ul className='menu'>
              <li>
                <Link to="/drinkmenu" style={{ textDecoration: 'none', margin: '0 1rem' ,color: 'rgb(3, 67, 48)'}}>Menu</Link>
              </li>
              <li>
                <Link to="/" style={{ textDecoration: 'none' , margin: '0 1rem',color: 'rgb(3, 67, 48)' }}>Promotions</Link>
              </li>
            </ul>

            <ul className='login'>
              <li>
                <Link to="/signin" style={{ textDecoration: 'none' ,margin: '0 1rem',color: 'rgb(3, 67, 48)'}}>Sign In</Link>
              </li>
              <li>
                <Link to="/signup" style={{ textDecoration: 'none' ,margin: '0 1rem' ,color: 'rgb(3, 67, 48)'}}>Sign Up</Link>
              </li>
            </ul>
          </nav>

        </header>

        <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/drinkmenu" element={<Drinkmenu />} />
          <Route path="/dessertmenu" element={<Dessertmenu />} />
          <Route path="/orderButton" element={<OrderButton />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        </main>
        <footer className='footer'>
        <p>© {new Date().getFullYear()} PAST Cafe. All rights reserved.</p>
        </footer>
      </div>

    </Router>
  );
}

export default App


