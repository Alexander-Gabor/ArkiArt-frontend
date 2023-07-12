import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Tooltip } from 'react-tooltip';
import { addToCart } from 'reducers/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  const productColor = product[0].color[0];
  const [color, setColor] = useState(productColor);

  const { id } = useParams();
  const dispatch = useDispatch();
  return (
    <Container>
      <ProductCard>
        {product.filter((product) => product.id === id).map((item, index) => {
          return (
            <div>
              <ProductImage src={item.img} alt={item.name} />
              <ProductDetails>
                <ProductTitle>{item.name}</ProductTitle>
                <ProductDescription>{item.text}</ProductDescription>
                <ProductPrice>{item.price}</ProductPrice>
                <ColorSelect>
                  <Label htmlFor="color">Pick a color</Label>
                  <Select
                    id="color"
                    name="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}>
                    {item.color.map((color, index) => {
                      return (
                        <option key={index} value={color}>
                          {color}
                        </option>
                      );
                    })}
                  </Select>
                </ColorSelect>
                <StyledButton
                  color="gray"
                  size="lg"
                  variant="outlined"
                  ripple
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="123...test!"
                  onClick={() => dispatch(
                    addToCart({
                      id: item.id,
                      name: item.name,
                      img: item.img,
                      color,
                      price: item.price,
                      amount: 1,
                      totalPrice: item.price
                    })
                  )}>
                      ADD TO CART
                </StyledButton>
                <Tooltip id="my-tooltip" place="top" effect="solid">
                  Tooltip for the register button
                </Tooltip>
              </ProductDetails>
            </div>
          )
        })}
      </ProductCard>
    </Container>
  )
}

export default SingleProduct;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px 0;
`

const ProductCard = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
    max-width: 40%;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-right: 1rem;
  }
`;

const ProductDetails = styled.div`
  @media (min-width: 768px) {
    flex-grow: 1;
  }
`;

const ProductTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled.p`
  color: #666;
  margin-bottom: 0.75rem;
`;

const ProductPrice = styled.span`
  font-style: italic;
`;

// const StyledTooltip = styled(Tooltip)`
//   color: black;
//   /* Add any custom styles for the tooltip here */
// `;

const StyledButton = styled.button`
  background-color: transparent;
  border: 2px solid #9ca3af;
  border-radius: 0.375rem;
  color: #4b5563;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f9fafb;
    border-color: #6b7280;
    color: #1f2937;
    cursor: pointer;
  }

  &[data-tooltip-id] {
    position: relative;

    &:before {
      content: attr(data-tooltip-content);
      position: absolute;
      bottom: calc(100% + 0.75rem);
      left: 50%;
      transform: translateX(-50%);
      padding: 0.5rem;
      background-color: #1f2937;
      color: #ffffff;
      font-size: 0.875rem;
      font-weight: 400;
      border-radius: 0.375rem;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease-in-out;
    }

    &:hover:before {
      opacity: 1;
    }
  }
`;

const ColorSelect = styled.div`
  padding-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #000000;
`;

const Select = styled.select`
  background-color: #f9fafb;
  border: 1px solid #d1d5db;
  color: #000000;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  focus: ring: 0 0 0 2px #3b82f6;
  focus: border: 0 0 0 2px #3b82f6;
  display: block;
  width: 100%;
  padding: 0.625rem;
  background-color: #1f2937;
  border-color: #374151;
  placeholder: #9ca3af;
  color: #ffffff;
  focus: ring: 0 0 0 2px #3b82f6;
  focus: border: 0 0 0 2px #3b82f6;

  &:hover {
    cursor: pointer;
  }
`;

const Option = styled.option`
  /* Add any additional styling for options if needed */
`;