import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import Slider from 'components/Slider/Slider'
import NavigateButtons from 'components/NavigateButtons/NavigateButtons';
import Footer from 'components/Footer/Footer';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <NavigateButtons />
      <Footer />
    </div>
  )
}

export default Main;