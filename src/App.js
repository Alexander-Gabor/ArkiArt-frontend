import React from 'react'
import Main from 'components/Main/Main'
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FilteredProducts from 'components/FilteredProducts/FilteredProducts';
import SingleProduct from 'components/FilteredProducts/SingleProduct';

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/filteredProducts/:type" element={<FilteredProducts />} />
          <Route path="/filteredProducts/:type/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
