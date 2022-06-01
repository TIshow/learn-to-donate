import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// image
import UNICEF_IMG from '../static/unicef.png';
import KAMONOHASHI_IMG from '../static/kamonohashi.png';
import ASHINAGA_IMG from '../static/ashinaga.png';
import ISHIDAN_IMG from '../static/ishidan.png';

// style
import styled, { keyframes } from 'styled-components';
import Color from '../styles/Color';

const data = {
  organizations: [
    {
      title: "UNICEF",
      description: "The United Nations International Children's Emergency Fund",
      imageURL: UNICEF_IMG,
    },
    {
      title: "かものはしプロジェクト",
      description: "売春宿に売られ、無理やり働かされてしまう子どもを助ける",
      imageURL: KAMONOHASHI_IMG,
    },
    {
      title: "あしなが育英会",
      description: "病気や災害、自死（自殺）などで親を亡くした子どもたちを助ける",
      imageURL: ASHINAGA_IMG,
    },
    {
      title: "国境なき医師団",
      description: "戦闘による死傷者や国外に避難する人が増え続けているウクライナを助ける",
      imageURL: ISHIDAN_IMG,
    },
  ]
};

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
          <h1 style={{ color: '#FFFFFF', padding: '0 0 60px 60px', textAlign: "center" }}>Select the <span style={{ color: `${Color.ACCENT_COLOR}` }}>Quest</span></h1>
          <CardsContainer>
            {data?.organizations.slice(0, 40).map((item, index) => (
              <Link key={index} to={`/`} style={{ textDecoration: 'none' }}>
                <Card key={index}>
                  <img src={item.imageURL} style={{ width: '100%' }} alt={"TOP_IMG"} />
                  <div style={{ padding: '16px' }}>
                    <h2 style={{ textAlign: 'left' }}>{item.title}</h2>
                    <p style={{ paddingTop: '8px', textAlign: 'left' }}>{item.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </CardsContainer>
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
  background-color: Transparent;
`

const Card = styled.div`
  background-color: ${Color.PRIMARY_COLOR};
  border-radius: 16px;
  color: #1D1D1F;
  text-align: center;
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
