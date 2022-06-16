import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client';

// image
import USER_IMG from '../static/user_icon.png'

// style
import styled, { keyframes } from 'styled-components'
import Color from '../styles/Color'

interface Quest {
  id: number,
  question: string,
  category_id: number,
  is_answer: number,
  choice: string,
}

interface Quests {
  Quests: [Quest]
}

const GET_QUESTS = gql`
  query GetQuests($category_id: Int!) {
    quests(category_id: $category_id) {
      id
      question
      category_id
      is_answer
      choice
    }
  }
`;

const Quest: React.FC = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<Number>(0)
  const [questionNumber, setQuestionNumber] = useState<Number>(0)

  const { loading, error, data } = useQuery<Quests>(GET_QUESTS, {
    variables: { category_id: Number(2) }
  });

  if (loading) return <>Loading</>;
  if (error) return <>`Error! ${error.message}`</>;

  console.log(data)

  const NextQuestion = () => {
    if (questionNumber === 0) {
      setQuestionNumber(1)
      setSelected(0)
    } else if (questionNumber === 1) {
      setQuestionNumber(2)
      setSelected(0)
    } else if (questionNumber === 2) {
      setQuestionNumber(3)
      setSelected(0)
    } else if (questionNumber === 3) {
      setQuestionNumber(4)
      setSelected(0)
    } else if (questionNumber === 4) {
      setQuestionNumber(5)
      setSelected(0)
    }
  }

  const Question = () => {
    if (questionNumber === 0) {
      return (
        <FadeIn>
          <QuizContainer>
            <div style={{ fontSize: '24px', padding: '16px 8px' }}>
              What is the name of the Ukrainian Prime Minister?
            </div>
            <div style={{ fontSize: '16px', padding: '16px 8px' }}>
              <SelectButton
                style={selected === 1 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                onClick={() => setSelected(1)}
              >
                Aleksandr Lukashenko
              </SelectButton>
              <SelectButton
                style={selected === 2 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                onClick={() => setSelected(2)}
              >
                Denys Shmyhal
              </SelectButton>
              <SelectButton
                style={selected === 3 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                onClick={() => setSelected(3)}
              >
                Volodymyr Zelenskyy
              </SelectButton>
              <SelectButton
                style={selected === 4 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                onClick={() => setSelected(4)}
              >
                Mikhail Mishustin
              </SelectButton>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <NextButton onClick={() => NextQuestion()}>Next</NextButton>
            </div>
          </QuizContainer>
        </FadeIn>
      )
    } else if (questionNumber === 1) {
      return (
        <div>
          <FadeIn>
            <QuizContainer>
              <div style={{ fontSize: '24px', padding: '16px 8px' }}>
                Where is the capital of Ukraine?
              </div>
              <div style={{ fontSize: '16px', padding: '16px 8px' }}>
                <SelectButton
                  style={selected === 1 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                  onClick={() => setSelected(1)}
                >
                  New York
                </SelectButton>
                <SelectButton
                  style={selected === 2 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                  onClick={() => setSelected(2)}
                >
                  Kiev
                </SelectButton>
                <SelectButton
                  style={selected === 3 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                  onClick={() => setSelected(3)}
                >
                  Tallinn
                </SelectButton>
                <SelectButton
                  style={selected === 4 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                  onClick={() => setSelected(4)}
                >
                  Moscow
                </SelectButton>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <NextButton onClick={() => NextQuestion()}>Next</NextButton>
              </div>
            </QuizContainer>
          </FadeIn>
        </div>
      )
    } else if (questionNumber === 2) {
      return (
        <FadeIn>
          <QuizContainer>
            <div style={{ fontSize: '24px', padding: '16px 8px' }}>
              What does the yellow color of the Ukrainian flag indicate?
            </div>
            <div style={{ fontSize: '16px', padding: '16px 8px' }}>
              <SelectButton
                style={selected === 1 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                onClick={() => setSelected(1)}
              >
                Wheat
              </SelectButton>
              <SelectButton
                style={selected === 2 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                onClick={() => setSelected(2)}
              >
                Corn
              </SelectButton>
              <SelectButton
                style={selected === 3 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                onClick={() => setSelected(3)}
              >
                Potatoes
              </SelectButton>
              <SelectButton
                style={selected === 4 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                onClick={() => setSelected(4)}
              >
                Banana
              </SelectButton>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <NextButton onClick={() => NextQuestion()}>Next</NextButton>
            </div>
          </QuizContainer>
        </FadeIn>
      )
    } else if (questionNumber === 3) {
      return (
        <div>
          <FadeIn>
            <QuizContainer>
              <div style={{ fontSize: '24px', padding: '16px 8px' }}>How big is Ukraine's population?</div>
              <div style={{ fontSize: '16px', padding: '16px 8px' }}>
                <SelectButton
                  style={selected === 1 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                  onClick={() => setSelected(1)}
                >
                  44.13 million
                </SelectButton>
                <SelectButton
                  style={selected === 2 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                  onClick={() => setSelected(2)}
                >
                  20.22 million
                </SelectButton>
                <SelectButton
                  style={selected === 3 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                  onClick={() => setSelected(3)}
                >
                  5 million
                </SelectButton>
                <SelectButton
                  style={selected === 4 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                  onClick={() => setSelected(4)}
                >
                  100.11 million
                </SelectButton>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <NextButton onClick={() => NextQuestion()}>Next</NextButton>
              </div>
            </QuizContainer>
          </FadeIn>
        </div>
      )
    } else if (questionNumber === 4) {
      return (
        <FadeIn>
          <QuizContainer>
            <div style={{ fontSize: '24px', padding: '16px 8px' }}>
              In what year was the Ukrainian Ground Force founded?
            </div>
            <div style={{ fontSize: '16px', padding: '16px 8px' }}>
              <SelectButton
                style={selected === 1 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                onClick={() => setSelected(1)}
              >
                1991
              </SelectButton>
              <SelectButton
                style={selected === 2 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                onClick={() => setSelected(2)}
              >
                2001
              </SelectButton>
              <SelectButton
                style={selected === 3 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                onClick={() => setSelected(3)}
              >
                1881
              </SelectButton>
              <SelectButton
                style={selected === 4 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                onClick={() => setSelected(4)}
              >
                1771
              </SelectButton>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <NextButton onClick={() => NextQuestion()}>Next</NextButton>
            </div>
          </QuizContainer>
        </FadeIn>
      )
    } else {
      return (
        <div>
          <FadeIn>
            <QuizContainer>
              <div style={{ padding: '16px' }}>
                <img src={USER_IMG} style={{ width: '30%', borderRadius: '50%' }} alt={'TOP_IMG'} />
                <div style={{ paddingTop: '16px' }}>Sket太郎</div>
                <div>Lv.12</div>
                <div
                  style={{
                    width: '100%',
                    height: '16px',
                    marginTop: '16px',
                    border: `2px solid ${Color.ACCENT_COLOR}`,
                    borderRadius: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '70%',
                      height: '16px',
                      borderRadius: '16px',
                      backgroundColor: `${Color.ACCENT_COLOR}`,
                    }}
                  />
                </div>
                <div>次のレベルまであと30sket</div>
              </div>
              <div
                style={{
                  position: 'relative',
                  padding: '16px',
                  margin: '8px 16px',
                  border: `2px solid ${Color.ACCENT_COLOR}`,
                  borderRadius: '16px',
                }}
              >
                <div style={{ fontSize: '40px' }}>Congrats !!</div>
                <div style={{ marginTop: '16px' }}>
                  あなたのおかげでウクライナ難民の子ども一人の一日分の食事が確保されました！
                </div>
                <div>ありがとうございます！</div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <NextButton onClick={() => NextQuestion()}>シェアする</NextButton>
                </div>
              </div>
            </QuizContainer>
          </FadeIn>
        </div>
      )
    }
  }

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
        <BodyContainer>{Question()}</BodyContainer>
      </TopContainer>
    </>
  )
}

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
  background-color: #ffffff;
  color: #2f2f2f;
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
    color: #ffffff;
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
    color: #ffffff;
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
`

const FadeIn = styled.div`
  animation: ${fadeIn} 0.8s ease-in-out;
`

export default Quest
