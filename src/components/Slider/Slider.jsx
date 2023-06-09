/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import { nextSlide, prevSlide, dotSlide } from 'reducers/sliderSlice';
import { useSelector, useDispatch } from 'react-redux'
import { sliderData } from 'assets/data/Data';
// import styled from 'styled-components';
import styled, { css } from 'styled-components/macro';

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value)
  console.log('slideIndex', slideIndex)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        {sliderData.map((item, index) => {
          return (
            <SliderItem isActive={parseInt(item.id, 10) === slideIndex} key={item.id}>
              {/* <div> */}
              {parseInt(item.id, 10) === slideIndex && (
                <SliderImage src={item.img} alt="slider photos" onContextMenu={(e) => e.preventDefault()} />
              )}
              {/* </div> */}
              <TextContainer>
                <Text>
                  {parseInt(item.id, 10) === slideIndex && item.text}
                </Text>
              </TextContainer>
            </SliderItem>
          )
        })}
      </div>
      {/* <button type="button" onClick={() => dispatch(nextSlide(slideIndex + 1))}>Next</button>
      <button type="button" onClick={() => dispatch(prevSlide(slideIndex - 1))}>Previous</button> */}
      <SliderContainer>
        <DotContainer>
          {sliderData.map((dot, index) => (
            <div key={dot.id}>
              <Dot
                isActive={index === slideIndex}
                onClick={() => dispatch(dotSlide(index))} />
            </div>
          ))}
        </DotContainer>

        <div>
          <ArrowButton
            onClick={() => dispatch(nextSlide(slideIndex + 1))}
            style={{ top: '50%', right: '10px' }}>
            <ArrowIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </ArrowIcon>
          </ArrowButton>

          <ArrowButton
            onClick={() => dispatch(prevSlide(slideIndex - 1))}
            style={{ top: '50%', left: '10px' }}
            S>
            <ArrowIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5" />
            </ArrowIcon>
          </ArrowButton>
        </div>
      </SliderContainer>
    </div>
  )
}

export default Slider;

const SliderImage = styled.img`
    align-items: center;
    /* padding: 15px; */
    margin: 5px 0 5px 0;
    height: 600px;
    /* width: 80% */
    width: 100%;
    object-fit: cover;

    
`

const SliderItem = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transition: opacity 700ms ease-in-out, transform 700ms ease-in-out;
  transform: scale(0.95);

  ${(props) => props.isActive && css`
      opacity: 1;
      transform: scale(1);
    `}
`;

const ItemCaption = styled.p`
    text-align: center;
`

//

const SliderContainer = styled.div`
  /* position: relative; */
`;

const DotContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  /* bottom: 100px;
  left: 45%; */
`;

const Dot = styled.div`
  margin-right: 4px;
  background-color: ${(props) => (props.isActive ? '#34D399' : 'rgb(24, 154, 180)')};
  border-radius: 9999px;
  padding: 10px;
  cursor: pointer;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  border: none;
  /* background-color: #ffffff; */
  border-radius: 9999px;
  padding: 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #189ab446;
  }
`;

const ArrowIcon = styled.svg`
  fill: #000000cb;
  width: 50px;
  height: 50px;
  stroke-width: 0.5;
  stroke: #00000088;
`;

const TextContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  top: 44px;
  /* left: 25%;
  right: 25%; */
  margin: auto;
`;

const Text = styled.p`
  text-align: center;
  color: white;
  /* background-color: #00000032; */
  backdrop-filter: blur(1px) saturate(70%);
  height: 70%;
  font-size: 1rem;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  letter-spacing: normal;
  /* line-height: 1; */
  width: 65%;

  @media (min-width: 768px) {
    width: 100%;
    font-size: 30px;
    font-weight: 700;
  }
`;