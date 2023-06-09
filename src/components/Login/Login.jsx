/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import BoatGuy from 'assets/images/boat.png'
import { API_URL } from '../../utils/urls'
// import user from '../../reducers/user'
import { setAccessToken, setUsername, setUserId, setError } from '../../reducers/user';

// import Background from

const Login = () => {
  const [formUsername, setFormUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('login');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((state) => state.user.accessToken);
  //   const accessToken = useSelector((store) => store.user && store.user.accessToken);

  const error = useSelector((state) => state.user.error);
  useEffect(() => {
    if (accessToken) {
      navigate('/')
    }
  }, [accessToken, navigate]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ username: formUsername, password })
    }
    fetch(API_URL(mode), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data)
          dispatch(setAccessToken(data.response.accessToken));
          dispatch(setUsername(data.response.username));
          dispatch(setUserId(data.response.id));
          dispatch(setError(null));
        } else {
          dispatch(setAccessToken(null));
          dispatch(setUsername(null));
          dispatch(setUserId(null));
          dispatch(setError(data.response));
        }
      })
  }

  return (
    <StyledMainWrapper>
      <InnerWrapper>
        <div>
          <StyledHeader>Join us!</StyledHeader>
          <SignUpText>Sign up below</SignUpText>
        </div>
        <StyledForm onSubmit={onFormSubmit}>
          <RadioButtonWrapper>
            <LabelText htmlFor="register">Register
              <input
                type="radio"
                id="register"
                checked={mode === 'register'}
                onChange={() => setMode('register')} />
            </LabelText>
            <LabelText htmlFor="login">Login
              <input
                type="radio"
                id="login"
                checked={mode === 'login'}
                onChange={() => setMode('login')} />
            </LabelText>
          </RadioButtonWrapper>
          <LabelForm htmlFor="username">Username
            <input
              type="text"
              id="username"
              placeholder="At least 2 characters"
              value={formUsername}
              minLength="2"
              maxLength="14"
              onChange={(e) => setFormUsername(e.target.value)} />
          </LabelForm>
          <LabelForm htmlFor="password">Password
            <input
              type="password"
              id="password"
              placeholder="At least 8 characters"
              value={password}
              minLength="8"
              onChange={(e) => setPassword(e.target.value)} />
          </LabelForm>
          <SubmitButton
            type="submit"
            disabled={formUsername.length < 2 || password.length < 8}>
            {(mode === 'register') ? 'Register' : 'Login'}
          </SubmitButton>
        </StyledForm>
        {error !== null && mode === 'register' && (<ErrorMessage>Sorry, user already exists.</ErrorMessage>)}
        {error !== null && mode === 'login' && (<ErrorMessage>Pls make sure that you are a registered user and that you have filled in the correct login information.</ErrorMessage>)}
      </InnerWrapper>
      {/* <BackgroundContainer>
        <BackgroundImg src={Background} />
      </BackgroundContainer> */}
      <SpinningWheel className="logo-image-user" src={BoatGuy} alt="spinning wheel" />
    </StyledMainWrapper>
  );
}

const StyledMainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 100vh; */
`

const InnerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 80vw;
  align-items: center;
  gap: 15px;

  @media (min-width: 667px){
    width: 50vw;
  }
  @media (min-width: 1024px){
    width: 50vw;
  }
`

const RadioButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column; 
  width: 350px;
  gap: 10px;
  padding: 10px;
  margin-bottom: 15px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`
const ErrorMessage = styled.p`
  margin-top: 0;
  text-align: center; 
`
const LabelForm = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
`

const LabelText = styled.label`
  display: flex;
  justify-content: space-evenly;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
`

const StyledHeader = styled.h1`
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 10px;
  font-family: Inter, sans-serif;
  font-weight: 400;
`

const SignUpText = styled.h2`
  font-size: 2rem;
  color: gray;
  text-align: center;
  font-family: Inter, sans-serif;
  font-weight: 300;
`

const BackgroundContainer = styled.div`
  height: 20%;
  width: 100%;

  @media (min-width: 667px){
    height: 40%;
  }
  @media (min-width: 1024px){
    height: 60%;
  }
`

const BackgroundImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`

const SubmitButton = styled.button`
  border: 2px solid #257ca3;
  color: white;
  background-color: #257ca3;
  width: 68px;
  border-radius: 20px;
  font-family: Urbanist;
  cursor: pointer;

  &:hover {
    border: 2px solid black;
    background-color: black;
    color: white;
  }
  
  &:disabled {
    background-color: #e3e4e6;
    border: 2px solid #e3e4e6;
    color: white;
  }
`

const SpinningWheel = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    animation: rotation 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    }
`

export default Login;