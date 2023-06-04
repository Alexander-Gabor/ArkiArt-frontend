import React from 'react'
import Main from 'components/Main/Main'
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FilteredItems from 'components/FilteredItems/FilteredItems';

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/filteredItems/:type" element={<FilteredItems />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
