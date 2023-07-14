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
          A creative energetic front-end deveoloper with an extensive design experience and a versatile skillset. Armed with a wide range of abilities in development, softskills, and an eye for rich user interfaces. Alexander strives for excellence and thrives in cooperative environments.
          </Description>
          <StackInfo>
            JavaScript - React - Redux - Google Cloud - Netlify - Node.js - Express - MongoDB - TailwindCSS - Material UI - Unsplash
          </StackInfo>
          <Links>
            <a href="https://www.linkedin.com/in/alexander-gabor-1485b4260/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://alexandergabor.netlify.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
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
  height: 90%;
  margin: 25px 0;
  border: 1px solid #cccccc9d;
  border-radius: 4px;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
`;

const ProfilePhoto = styled.img`
  width: 80%;
  height: 80%;
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
  font-weight: 300;
  font-size: 16px;
  margin-bottom: 16px;
`;
const StackInfo = styled.p`
  font-family: 'Poppins', sans-serif;
  text-align: center;
  font-weight: 300;
  font-size: 14px;
  margin-bottom: 16px;
`;

const Links = styled.div`
  display: flex;
  padding: 10px;

  a {
    margin-right: 16px;
    color: #333;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;