import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Tooltip } from 'react-tooltip';

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  console.log('singleProduct', product)
  const { id } = useParams();

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
                <StyledButton
                  color="gray"
                  size="lg"
                  variant="outlined"
                  ripple
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="registerTip">
                      Add to Cart
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
`

const ProductCard = styled.div`
background-color: tomato;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-weight: bold;
`;

const StyledTooltip = styled(Tooltip)`
  color: black;
  /* Add any custom styles for the tooltip here */
`;

const StyledButton = styled.button`
  /* Add any custom styles for the button here */
`;
