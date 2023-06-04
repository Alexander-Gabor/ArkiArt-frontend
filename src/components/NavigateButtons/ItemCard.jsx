import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';

const ItemCard = ({ id, name, text, img, price, colors }) => {
  const dispatch = useDispatch();
  const { type } = useParams();
  return (
    <StyledLink to={`/filteredProducts/${type}/${id}`}>
      <StyledCard onClick={() => dispatch(singleItem(id))}>
        <StyledCardHeader>
          <StyledImage src={img} alt="img-blur-shadow" />
        </StyledCardHeader>
        <StyledCardBody>
          <StyledTypography variant="h5">{name}</StyledTypography>
          <StyledTypography>{text}</StyledTypography>
        </StyledCardBody>
        <StyledCardFooter>
          <StyledTypography variant="small">{price}$</StyledTypography>
          <div>
            {colors?.map((color, index) => (
              <StyledColorMarker
                key={name}
                style={{ backgroundColor: color }} />
            ))}
          </div>
        </StyledCardFooter>
      </StyledCard>
    </StyledLink>
  )
}

export default ItemCard;

const StyledLink = styled(Link)`
  /* Add your custom styles here */
  color: black;
  text-decoration: none;
  /* ... */
`;

const StyledCard = styled.div`
  width: 24rem; /* Equivalent to w-96 */
`;

const StyledCardHeader = styled.div`
  position: relative;
  height: 24rem; /* Equivalent to h-96 */
  background-color: blue; /* Equivalent to color="blue" */
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
`;

const StyledCardBody = styled.div`
  text-align: center;
`;

const StyledTypography = styled.p`
  margin-bottom: 0.5rem; /* Equivalent to mb-2 */
  text-decoration: none;
`;

const StyledCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.75rem; /* Equivalent to py-3 */
  border-top: 1px solid #e2e8f0; /* Equivalent to divider */
`;

const StyledColorMarker = styled.i`
  margin-top: 3px; /* Equivalent to mt-[3px] */
  border-radius: 9999px; /* Equivalent to rounded-full */
  padding: 0.5rem; /* Equivalent to p-2 */
  margin-right: 1rem; /* Equivalent to mr-4 */
  text-decoration: none;
`;