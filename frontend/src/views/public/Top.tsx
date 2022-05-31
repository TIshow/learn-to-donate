import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// image
import TOP_IMG from '../static/art_top.jpeg';
// import LOGO from '../static/logo.png';

// style
import styled from 'styled-components';
import Color from '../styles/Color';

const Top: React.FC = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Number>(0);

  // if (loading) return <Loading />;

  return (
    <>
      <TopContainer>
        <TopBar>
          <Title onClick={() => navigate('/')}>
            {/* <img src={LOGO} style={{ maxWidth: '60%', height: 'auto' }} alt={"LOGO"} /> */}
            Learn to Donate
          </Title>
          <LoginButton onClick={() => { }}>Login</LoginButton>
          <SignupButton onClick={() => { }}>Sign up</SignupButton>
        </TopBar>
        <BodyContainer>
          <QuizContainer>
            <div style={{ fontSize: "24px", padding: "16px 8px" }}>What is the name of the Ukrainian Prime Minister?</div>
            <div style={{ fontSize: "16px", padding: "16px 8px" }}>
              <SelectButton style={selected === 1 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}} onClick={() => setSelected(1)}>Aleksandr Lukashenko</SelectButton>
              <SelectButton style={selected === 2 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}} onClick={() => setSelected(2)}>Denys Shmyhal</SelectButton>
              <SelectButton style={selected === 3 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}} onClick={() => setSelected(3)}>Volodymyr Zelenskyy</SelectButton>
              <SelectButton style={selected === 4 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}} onClick={() => setSelected(4)}>Mikhail Mishustin</SelectButton>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <NextButton>Next</NextButton>
            </div>
          </QuizContainer>
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

const QuizContainer = styled.div`
  height: 500px;
  width: 360px;
  background-color: #FFFFFF;
  color: #2F2F2F;
  text-align: center;
  margin: auto;
  border-radius: 16px;
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

export default Top;
