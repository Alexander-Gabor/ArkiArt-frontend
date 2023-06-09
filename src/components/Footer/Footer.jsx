import React from 'react';
import styled from 'styled-components/macro';

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <Grid direction="column" align="center">
          <Cell width={1 / 2} align="center">
            <Logo src="/logo.svg" alt="logo-art" />
          </Cell>

          <Cell width={1 / 2} align="center">
            <Icon
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer">
              <img src="/instagram.svg" alt="instagram-icon" />
            </Icon>
          </Cell>
        </Grid>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;

const Logo = styled.img`
  width: 6rem;
`;

const Icon = styled.a`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
  }
`;

const StyledFooter = styled.div`
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
  flex-direction: column;
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
  flex-direction: ${(props) => props.direction || 'flex-start'};
  flex-wrap: wrap;
  width: 100%;
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
  padding-top: ${(props) => props.padding};
  box-shadow: ${(props) => ((props.boxShadow) ? ('rgb(0 0 0 / 11%) 0px 3px 8px;') : ('none'))};

  @media (max-width: 576px) {
    box-shadow: none;
  }
`;