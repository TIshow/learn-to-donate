import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// image
import USER_IMG from '../static/user_icon.png';

// style
import styled, { keyframes } from 'styled-components';
import Color from '../styles/Color';

const SelectOrganization: React.FC = () => {
  const navigate = useNavigate();

  // if (loading) return <Loading />;

  return (
    <>
      <TopContainer>
        <TopBar>
          <Title onClick={() => navigate('/')}>
            {/* <img src={LOGO} style={{ maxWidth: '60%', height: 'auto' }} alt={"LOGO"} /> */}
            Sket
          </Title>
          <LoginButton onClick={() => { }}>Login</LoginButton>
          <SignupButton onClick={() => { }}>Sign up</SignupButton>
        </TopBar>
        <BodyContainer>

        </BodyContainer>
      </TopContainer>
    </>
  );
};

const TopContainer = styled.div`
  position: relative;
  background-color: ${Color.BASE_COLOR};
  max-width: 100%;
  height: 1000px;
`

const BodyContainer = styled.div`
  padding: 160px 0;
  background-color: Transparent;
`

const Title = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
 `

const TopBar = styled.div`
  position: fixed;
  display: flex;
  z-index: 1;
  background-color: Transparent;
  width: 100%;
  height: 60px;
  top: 4%;
  left: 2%;
  font-size: 40px;
  color: ${Color.PRIMARY_COLOR};
`

const LoginButton = styled.button`
  position: absolute;
  top: 20px;
  right: 200px;
  height: 52px;
  width: 100px;
  color: ${Color.PRIMARY_COLOR};
  background-color: Transparent;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid ${Color.PRIMARY_COLOR};
  border-radius: 16px;
  transition: 0.4s;
  cursor: pointer;
  :hover {
    color: ${Color.ACCENT_COLOR};
    background-color: Transparent;
    border: 1px solid ${Color.ACCENT_COLOR};
  }
`

const SignupButton = styled.button`
  position: absolute;
  top: 20px;
  right: 80px;
  height: 52px;
  width: 100px;
  color: ${Color.PRIMARY_COLOR};
  background-color: Transparent;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid ${Color.PRIMARY_COLOR};
  border-radius: 16px;
  transition: 0.4s;
  cursor: pointer;
  :hover {
    color: ${Color.ACCENT_COLOR};
    background-color: Transparent;
    border: 1px solid ${Color.ACCENT_COLOR};
}
`

const CardsContainer = styled.div`
  align-items: start;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
  background-color: ${Color.PRIMARY_COLOR};
`

const Card = styled.div`
  background-color: ${Color.PRIMARY_COLOR};
  border-radius: 5px;
  color: #FFFFFF;
  text-align: center;
  margin: 16px 0;
`

const NextButton = styled.button`
  position: relative;
  width: 100px;
  height: 40px;
  margin-top: 16px;
  color: ${Color.ACCENT_COLOR};
  background-color: Transparent;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid ${Color.ACCENT_COLOR};
  border-radius: 16px;
  transition: 0.4s;
  cursor: pointer;
  :hover {
    color: #FFFFFF;
    background-color: ${Color.ACCENT_COLOR};
    border: 1px solid ${Color.ACCENT_COLOR};
  }
`

const SelectButton = styled.button`
  position: relative;
  width: 95%;
  height: 60px;
  margin-top: 16px;
  padding: 16px;
  background-color: Transparent;
  font-size: 16px;
  border: 2px solid ${Color.ACCENT_COLOR};
  border-radius: 16px;
  transition: 0.4s;
  cursor: pointer;
  :hover {
    color: #FFFFFF;
    background-color: ${Color.ACCENT_COLOR};
    border: 2px solid ${Color.ACCENT_COLOR};
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeIn = styled.div`
  animation: ${fadeIn} .8s ease-in-out;
`;

export default SelectOrganization;
