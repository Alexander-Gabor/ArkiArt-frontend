/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components/macro';
import ProfilePic from 'assets/images/ProfilePic.jpg'

const About = () => {
  return (
    <CardWrapper>
      <CardContainer>
        <ProfilePhoto src={ProfilePic} alt="Profile" />
        <CardContent>
          <Title>Alexander Gabor</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan consequat lobortis. Phasellus at tellus magna. Quisque aliquet, justo vitae dapibus posuere, mi lectus ultricies lectus, vel vestibulum odio nisi et erat. Curabitur sagittis mi non felis tincidunt dictum.
          </Description>
          <Links>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer">Portfolio</a>
          </Links>
        </CardContent>
      </CardContainer>
    </CardWrapper>
  )
}

export default About;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 25px 0;
  border: 1px solid #cccccc9d;
  border-radius: 4px;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
`;

const ProfilePhoto = styled.img`
  width: 90%;
  height: 90%;
  object-fit: cover;
  border-radius: 50%;
`;

const CardContent = styled.div`
margin-top: 1rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  margin-bottom: 16px;
`;

const Links = styled.div`
  display: flex;

  a {
    margin-right: 16px;
    color: #333;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;