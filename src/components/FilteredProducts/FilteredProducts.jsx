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
    font-family: 'Poppins', sans-serif;
    padding: 5px 40px;
`
const StyledItemCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 1em;
    justify-content: center;

    @media (min-width: 768px) {
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    column-gap: 2em;
    margin: 100px; */
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`