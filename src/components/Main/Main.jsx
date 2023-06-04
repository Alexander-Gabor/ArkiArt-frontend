import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import Slider from 'components/Slider/Slider'
import NavigateButtons from 'components/NavigateButtons/NavigateButtons';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <NavigateButtons />
    </div>
  )
}

export default Main;