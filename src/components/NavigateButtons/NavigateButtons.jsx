import React from 'react';
import styled from 'styled-components/macro';
import { filterProducts } from 'reducers/productsSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import MainImage from '../../assets/images/Heroimage.jpg';

const NavigateButtons = () => {
  const buttons = [
    'Wall art',
    'Tote bags',
    // 'Notebooks',
    'T-Shirts',
    // 'Merch',
    'Cool nonsense']

  const dispatch = useDispatch()

  return (
    <div>
      <FlexContainer>
        {buttons.map((button) => {
          return (
            <div key={button} className="navigate-button">
              <Link to={`/filteredProducts/${button}`}>
                <NavButton
                  type="button"
                  color="gray"
                  size="lg"
                  onClick={() => dispatch(filterProducts(button))}>{button}
                </NavButton>
              </Link>
            </div>
          );
        })}
      </FlexContainer>
      <StyledImage
        src={MainImage}
        alt="a shinybackground" />
    </div>
  )
}

export default NavigateButtons;

const FlexContainer = styled.div`
  display: flex;
  padding: 10px;
  position: relative;
  align-items: center;
  justify-content: space-around;
  margin-top: 6rem;
`;
const NavButton = styled.button`
  color: ${(props) => (props.color === 'gray' ? 'black' : 'inherit')};
  font-size: ${(props) => (props.size === 'lg' ? '1rem' : 'inherit')};
  border: 1px solid ${(props) => (props.color === 'gray' ? 'gray' : 'inherit')};
  border-radius: 4px;
  padding: 4px;
  background-color: transparent;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => (props.color === 'gray' ? 'gray' : 'inherit')};
  }
`;

const StyledImage = styled.img`
  margin: 20px auto;
  display: block;
  height: 600px;
  width: 100%;
  border-radius: 0.375rem; /* Equivalent to rounded-md */
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.15); /* Equivalent to shadow-lg shadow-gray-600 */
`;