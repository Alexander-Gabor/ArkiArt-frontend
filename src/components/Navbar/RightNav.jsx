import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

const RightNav = ({ open }) => {
  // const navigate = useNavigate();
  // const onClickGoToAbout = () => {
  //   setTimeout(() => {
  //     setIsOpen(false);
  //   }, 200);
  //   navigate('/about');}

  return (
    <Ul open={open}>
      <li>
        <StyledNavLink to="/home">Home </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/about">About me </StyledNavLink>
      </li>
      {/* <StyledNavLink>Contact Us</StyledNavLink> */}
    </Ul>
  )
}

const StyledNavLink = styled(NavLink)`
  font-family: 'Poppins', sans-serif;
`

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 2;

    li {
      color: #fff;
    }
  }
`;

export default RightNav;