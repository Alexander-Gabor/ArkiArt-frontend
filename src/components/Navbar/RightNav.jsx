import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

const RightNav = (props) => {
  const { open, setOpen } = props;
  // const [isOpen, setIsOpen] = useState(!open);

  // const handleClose = () => {
  //   setIsOpen(false);
  // };

  return (
    <Ul open={open}>
      <li>
        <StyledNavLink to="/home" onClick={() => setOpen(!open)}>Home</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/about" onClick={() => setOpen(!open)}>About me</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/filteredProducts/Wall%20art" onClick={() => setOpen(!open)}>Wall-art</StyledNavLink>
      </li>
    </Ul>
  );
};

const StyledNavLink = styled(NavLink)`
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
`;

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
    padding-top: 5.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 2;

    li {
      color: #fff;
    }
  }
};
`

export default RightNav;
