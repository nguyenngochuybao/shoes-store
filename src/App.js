import './App.css';

import Header from './layouts/Header';
import Footer from './layouts/Footer';

import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Account from './pages/Account';
import UserInfo from './pages/UserInfo';

import Navbar from './layouts/Header/navbar';

import { Routes, Route, } from 'react-router-dom';

function App ()
{
  return (
    <div>
        <div className="container">
          <Navbar />
      </div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/products" element={ <Products /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/account" element={ <Account /> } />
        <Route path="/account" element={ <Account /> } />
        <Route path="/userInfo" element={ <UserInfo /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
