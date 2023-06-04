import ItemCard from 'components/NavigateButtons/ItemCard';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components/macro';

const FilteredItems = () => {
  const items = useSelector((state) => state.items.filteredItems);
  console.log('items', items);
  //   const params = useParams();
  //   console.log('params', params)
  const { type } = useParams();
  console.log('params', type)
  return (
    <div>
      <TypeText>{type}</TypeText>
      <StyledItemCard>
        {items.filter((item) => item.type === type)
          .map((item, name) => {
            return (
              <div key={item.name}>
                <ItemCard
                  id={item.id}
                  name={item.name}
                  text={item.text}
                  img={item.img}
                  color={item.color}
                  price={item.price} />
              </div>
            )
          })}
      </StyledItemCard>
    </div>
  )
}
export default FilteredItems;

const TypeText = styled.h1`
    color: black;
`
const StyledItemCard = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2em;
    justify-content: center;
`