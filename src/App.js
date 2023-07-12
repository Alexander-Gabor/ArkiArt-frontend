import React from 'react'
import './App.css';
import Main from 'components/Main/Main'
// import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FilteredProducts from 'components/FilteredProducts/FilteredProducts';
import SingleProduct from 'components/FilteredProducts/SingleProduct';
import Login from 'components/Login/Login';
import About from 'components/About/About';
import Footer from 'components/Footer/Footer'
// import { Navbar } from '@material-tailwind/react';
import Navbar from 'components/Navbar/Navbar';

export const App = () => {
  // const cart = useSelector((state) => state.cart.cart);
  // const totalAmount = useSelector((state) => state.cart.totalAmount);
  // const totalPrice = useSelector((state) => state.cart.totalPrice);

  // console.log('cart', cart);
  // console.log('totalAmount', totalAmount);
  // console.log('totalPrice', totalPrice);
  // const user = useSelector((state) => state.user.user);
  // const { authUser } = user;
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={authUser ? <Main /> : <Login />} /> */}
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/filteredProducts/:type" element={<FilteredProducts />} />
          <Route path="/filteredProducts/:type/:id" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
