import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Logo from '../../assets/images/arkiart-logo4.png';
import Heart from '../../assets/images/heart-svg.svg';
import Shopping from '../../assets/images/shopping-cart.svg'
import Cart from '../Cart/Cart'
import { NavLink, useNavigate } from 'react-router-dom';
// import Dropdown from '../HamburgerMenu/Dropdown';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true)
  }

  const navigate = useNavigate();
  const handleLogInClick = () => {
    navigate('/Login')
  }

  return (
    <>
      <StyledNavbar>
        <h3 className="title">Welcome to ArkiArt</h3>
      </StyledNavbar>
      <StyledTabsContainer>
        <div className="logo-container">
          <LogoContainer src={Logo} alt="store" />
        </div>
        <ButtonsContainer>
          <StyledButton type="button" onClick={handleLogInClick}>
            Sign in
          </StyledButton>
          <IconContainer>
            <Icon src={Heart} alt="heart icon" />
          </IconContainer>
          <p>Wishlist</p>
          <IconContainer>
            <Icon src={Shopping} alt="shopping icon" onClick={handleOpen} />
          </IconContainer>
          <p>Cart</p>
          <div>{ open && <Cart openModal={open} setOpen={setOpen} />}</div>
        </ButtonsContainer>
      </StyledTabsContainer>
    </>
  );
}

const StyledNavbar = styled.div`
  /* background-color: #f2f2f2; */
  background-color: #189AB4;
  padding: 4px;
  text-align: center;
  color: white;
`;

const StyledTabsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  padding: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const LogoContainer = styled.img`
  height: 50px;
  width: 100%;
`

const IconContainer = styled.div`
  display: flex
`

const Icon = styled.img`
  align-self: center;
  padding: 2px;
  height: 20px;
  width: 100%;
  cursor: pointer
`

const StyledButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 7em;
  max-height: 3em;
  align-self: center;
`;

export default Navbar;