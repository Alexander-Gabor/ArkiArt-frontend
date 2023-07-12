import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import { singleProduct } from '../../reducers/productsSlice';

const ProductCard = ({ id, name, text, img, price, color }) => {
  const dispatch = useDispatch();
  const { type } = useParams();
  return (
    <StyledLink to={`/filteredProducts/${type}/${id}`}>
      <StyledCard onClick={() => dispatch(singleProduct(id))}>
        <StyledCardHeader>
          <StyledImage src={img} alt="img-blur-shadow" />
        </StyledCardHeader>
        <StyledCardBody>
          <StyledTypography variant="h5">{name}</StyledTypography>
          <StyledTypography>{text}</StyledTypography>
        </StyledCardBody>
        <StyledCardFooter>
          <StyledTypography variant="small">{price}$</StyledTypography>
          <ColorMarkerContainer>
            {color?.map((color, name) => (
              <StyledColorMarker
                key={name}
                style={{ backgroundColor: color }} />
            ))}
          </ColorMarkerContainer>
        </StyledCardFooter>
      </StyledCard>
    </StyledLink>
  )
}

export default ProductCard;

const StyledLink = styled(Link)`
  /* Add your custom styles here */
  color: black;
  text-decoration: none;
  /* ... */
`;

const StyledCard = styled.div`
  padding: 10px;
  margin: 0 auto;
  width: 24rem; 
  /* Equivalent to w-96 */
  position: relative;
  background-color: #0001;
`;

const StyledCardHeader = styled.div`
  position: relative;
  background-color: #0000ff8; 
`;

const StyledImage = styled.img`
  height: 100%;
  width: fit-content;
  &:hover {
    filter: brightness(0.7);
  }
`;

const StyledCardBody = styled.div`
  text-align: center;
  padding: 2px;
`;

const StyledTypography = styled.p`
  margin-bottom: 0.5rem; /* Equivalent to mb-2 */
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
`;

const StyledCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.75rem; /* Equivalent to py-3 */
  border-top: 1px solid #e2e8f0; /* Equivalent to divider */
`;

const ColorMarkerContainer = styled.div`
  display: flex;
  flex-direction: row; 
`

const StyledColorMarker = styled.i`
  margin-top: 3px; /* Equivalent to mt-[3px] */
  border-radius: 9999px; /* Equivalent to rounded-full */
  padding: 0.5rem; /* Equivalent to p-2 */
  margin-right: 1rem; /* Equivalent to mr-4 */
  text-decoration: none;
  width: 10px;
  height: 10px;
  display: flex;
  flex-direction: row;
`;