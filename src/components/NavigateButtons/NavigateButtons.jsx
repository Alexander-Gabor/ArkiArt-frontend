import React from 'react';
import styled from 'styled-components/macro';
import { filterProducts } from 'reducers/productsSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import MainImage from '../../assets/images/Heroimage4.jpg';

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
  margin-top: 4rem;
`;
const NavButton = styled.button`
  color: ${(props) => (props.color === '#34D399' ? 'black' : 'inherit')};
  font-size: ${(props) => (props.size === 'lg' ? '1rem' : 'inherit')};
  border: 1px solid ${(props) => (props.color === 'gray' ? 'gray' : 'inherit')};
  border-radius: 4px;
  padding: 4px;
  background-color: transparent;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  /* &:hover {
    background-color: ${(props) => (props.color === '#34D399' ? '#34D399' : 'inherit')};
  } */

  &:hover {
    background-color: rgba(24, 154, 180, 0.653);
    color: white;
  }
`;

const StyledImage = styled.img`
  margin: 20px auto;
  object-fit: cover;
  display: block;
  height: 350px;
  width: 100%;
  border-radius: 0.375rem;
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.15);
  
  @media (min-width: 768px) {
    height: 720px;
  }
`;