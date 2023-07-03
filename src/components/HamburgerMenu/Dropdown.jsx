// import React, { useState } from 'react';

// import { Link } from 'react-router-dom';
// import useWindowSize from 'hooks/useWindowSize';
// import { MenuIcon, MenuLinks } from './MenuIcon';
// import StyledNavbar from '../blocks/Navbar';

// const Links = styled(Link)`
//   text-decoration: none;
//   color: black;
//   position: relative;

//   ${(props) =>
//     props.badge &&
//     `
//     &:after {
//       background-color: black;
//       color: white;
//       position: absolute;
//       padding: 3px;
//       right: -10px;
//       top: 12px;
//       border-radius: 16px;
//       width: 16px;
//       height: 16px;
//       font-size: 10px;
//       text-align: center;
//       line-height: 10px;
//       font-weight: 800;
//       content: '${props.badge}';
//     }
  
//   `}
// `;


// const Dropdown = () => {
//   const [nav, setNav] = useState(false);
//   const { showDropdown } = useWindowSize();

//   return (
//     <div className={showDropdown ? 'show' : 'hide'}>
//       <MenuIcon
//         showDropdown={showDropdown}
//         nav={nav}
//         onClick={() => {
//           setNav(!nav);
//         }}
//       >
//         <div />
//         <div />
//         <div />
//       </MenuIcon>
//       <MenuLinks showDropdown={showDropdown} nav={nav}>
//         <ul>
//           <li>
//             <Links to="/">Home</Links>
//           </li>
//           <li>
//             <Links to="/posters">Posters</Links>
//           </li>
//           <li>
//             <Links to="/login">
//               <StyledNavbar.UserIcon src="/user.svg" alt="user-icon" />
//             </Links>
//           </li>
//           <li>
//             <Links to="/checkout">
//               <StyledNavbar.Icon src="/cartIcon.svg" alt="cartIcon" />
//             </Links>
//           </li>
//         </ul>
//       </MenuLinks>
//     </div>
//   );
// };

// export default Dropdown;