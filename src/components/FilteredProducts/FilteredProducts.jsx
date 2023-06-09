import ProductCard from 'components/NavigateButtons/ProductCard';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components/macro';

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  console.log('products', products);
  //   const params = useParams();
  //   console.log('params', params)
  const { type } = useParams();
  console.log('params', type)
  return (
    <div>
      <TypeText>{type}</TypeText>
      <StyledItemCard>
        {products.filter((product) => product.type === type)
          .map((product, name) => {
            return (
              <div key={product.name}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  text={product.text}
                  img={product.img}
                  color={product.color}
                  price={product.price} />
              </div>
            )
          })}
      </StyledItemCard>
    </div>
  )
}
export default FilteredProducts;

const TypeText = styled.h1`
    color: black;
`
const StyledItemCard = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2em;
    justify-content: center;
`