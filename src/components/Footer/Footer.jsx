import React from 'react';
import styled from 'styled-components/macro';
import GitHubIcon from 'assets/images/github.svg'
import LinkedInIcon from 'assets/images/linkedin.svg'
import Smile from 'assets/images/smile.svg'

const Footer = () => {
  return (
    // <FooterContainer>
    <StyledFooter>
      <Wrapper>
        <Grid direction="column" align="center">
          <Cell width={1 / 2} align="center">
            <Icon
              href="https://alexandergabor.netlify.app/"
              target="_blank"
              rel="noreferrer">
              <img src={Smile} alt="Portfolio-icon" />
            </Icon>
          </Cell>

          <Cell width={1 / 2} align="center">
            <Icon
              href="https://github.com/Alexander-Gabor"
              target="_blank"
              rel="noreferrer">
              <img src={GitHubIcon} alt="GitHub-icon" />
            </Icon>
          </Cell>
          <Cell width={1 / 2} align="center">
            <Icon
              href="https://www.linkedin.com/in/alexander-gabor-1485b4260/"
              target="_blank"
              rel="noreferrer">
              <img src={LinkedInIcon} alt="LinkedIn-icon" />
            </Icon>
          </Cell>
        </Grid>
      </Wrapper>
    </StyledFooter>
    // </FooterContainer>
  );
};

export default Footer;

// const Logo = styled.img`
//   width: 6rem;
// `;

const Icon = styled.a`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    filter: brightness(2)
  }
`;

// const FooterContainer = styled.div`
//     min-height: 100vh;
//     display: flex;
//     flex-direction: column;
// `

const StyledFooter = styled.div`
  margin-top: auto;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #189AB4;
  color: black;
  padding: 2rem;
  width: 100%;

  p {
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

const Wrapper = styled.div` 
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.bgColor || 'transparent'};
  max-width: 1024px;
  width: 100%;
  padding: ${(props) => props.padding};
  margin-top: ${(props) => (props.margin ? 'var(--main-navbar-margin)' : '0')};

  @media (max-width: 768px) {
    padding: 0 2rem;
    width: 100%;
    margin-top: 0%;
  }
`;

const Cell = styled.div`
  width: ${(props) => props.width * 100}%;
  background-color: ${(props) => props.bgColor || 'transparent'};

  flex-direction: ${(props) => props.direction || 'column'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
  display: flex;
  padding: ${(props) => props.padding};
  align-self: ${(props) => props.alignSelf || 'unset'};

  @media (max-width: 992px) {
    width: ${(props) => (props.tablet ? props.tablet * 100 : 100)}%;
  }

  @media (max-width: 576px) {
    width: ${(props) => (props.mobile ? props.mobile * 100 : 100)}%;
  }
`;

const Grid = styled.div`
  display: flex;
  /* flex-direction: ${(props) => props.direction || 'flex-start'};
  flex-wrap: wrap; */
  width: 100%;
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
  padding-top: ${(props) => props.padding};
  box-shadow: ${(props) => ((props.boxShadow) ? ('rgb(0 0 0 / 11%) 0px 3px 8px;') : ('none'))};

  @media (max-width: 576px) {
    box-shadow: none;
  }
`;
