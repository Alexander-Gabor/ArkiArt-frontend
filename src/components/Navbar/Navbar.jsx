/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/arkiart-logo4.png';
import Heart from '../../assets/images/heart-svg.svg';
import Shopping from '../../assets/images/shopping-bag.svg'
import UserIcon from '../../assets/images/user2.svg'
import Cart from '../Cart/Cart'
import Burger from './Burger';
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
          <Burger />
          <IconContainer type="button" onClick={handleLogInClick}>
            <Icon src={UserIcon} alt="Login icon" />
          </IconContainer>
          {/* <IconContainer>
            <Icon src={Heart} alt="heart icon" />
          </IconContainer> */}
          {/* <p>Wishlist</p> */}
          <IconContainer>
            <Icon src={Shopping} alt="shopping icon" onClick={handleOpen} />
          </IconContainer>
          {/* <p>Cart</p> */}
          <div>{open && <Cart openModal={open} setOpen={setOpen} />}</div>
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
  background-color: #fff;
  max-height: 65px;
  padding: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    justify-content: space-around;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 60%;
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const LogoContainer = styled.img`
  height: 30px;
  width: 100%;
  padding-left: 35px;
  object-fit: contain;

  @media (min-width: 768px) {
    padding: 0px;
    height: 50px;
    width: 100%;
  }
`

const IconContainer = styled.div`
  display: flex
`

const Icon = styled.img`
  align-self: center;
  padding: 0 7px;
  height: 25px;
  width: 100%;
  cursor: pointer
`

/* const StyledButton = styled.button`
  font-family: 'Poppins', sans-serif;
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 5em;
  height: 25px;
  max-height: 3em;
  align-self: center;

  @media (min-width: 768px) {
    width: 5em;
  }
`; */

export default Navbar;

// import React, { useState } from 'react';
// import styled from 'styled-components/macro';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { slide as Menu } from 'react-burger-menu';
// import Logo from '../../assets/images/arkiart-logo4.png';
// import Heart from '../../assets/images/heart-svg.svg';
// import Shopping from '../../assets/images/shopping-cart.svg';
// import Cart from '../Cart/Cart';

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const navigate = useNavigate();
//   const handleLogInClick = () => {
//     navigate('/Login');
//   };

//   return (
//     <>
//       <StyledNavbar>
//         <h3 className="title">Welcome to ArkiArt</h3>
//       </StyledNavbar>
//       <StyledTabsContainer>
//         <div className="logo-container">
//           <LogoContainer src={Logo} alt="store" />
//         </div>
//         <ButtonsContainer>
//           <StyledButton type="button" onClick={handleLogInClick}>
//             Sign in
//           </StyledButton>
//           <IconContainer>
//             <Icon src={Heart} alt="heart icon" />
//           </IconContainer>
//           <p>Wishlist</p>
//           <IconContainer>
//             <Icon src={Shopping} alt="shopping icon" onClick={handleOpen} />
//           </IconContainer>
//           <p>Cart</p>
//           <div>{open && <Cart openModal={open} setOpen={setOpen} />}</div>
//         </ButtonsContainer>
//       </StyledTabsContainer>
//       {/* Hamburger menu */}
//       <MobileMenu right>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/products">Products</NavLink>
//         <NavLink to="/about">About</NavLink>
//         {/* Add more menu items as needed */}
//       </MobileMenu>
//     </>
//   );
// };

// const StyledNavbar = styled.div`
//   background-color: #189ab4;
//   padding: 4px;
//   text-align: center;
//   color: white;
// `;

// const StyledTabsContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   background-color: #fff;
//   padding: 5px;
//   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const ButtonsContainer = styled.div`
//   display: flex;
// `;

// const LogoContainer = styled.img`
//   height: 50px;
//   width: 100%;
// `;

// const IconContainer = styled.div`
//   display: flex;
// `;

// const Icon = styled.img`
//   align-self: center;
//   padding: 2px;
//   height: 20px;
//   width: 100%;
//   cursor: pointer;
// `;

// const StyledButton = styled.button`
//   background-color: #333;
//   color: #fff;
//   padding: 5px 10px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   width: 7em;
//   max-height: 3em;
//   align-self: center;
// `;

// const MobileMenu = styled(Menu)`
//   /* Customize your hamburger menu styles here */
//   background-color: #fff;
//   padding: 2em;
// `;

// export default Navbar;
