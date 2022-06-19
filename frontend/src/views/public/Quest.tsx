import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery, gql, useLazyQuery } from '@apollo/client';

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
  quests: Quest[]
}

const GET_QUESTS = gql`
  query GetQuests($category_id: ID!) {
    quests(category_id: $category_id){
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
  const [selected, setSelected] = useState<number>(0)
  const [questionNumber, setQuestionNumber] = useState<number>(0)

  const [QuestQuery, { loading, error, data }] = useLazyQuery<Quests>(GET_QUESTS, {
    fetchPolicy: "no-cache",
    variables: { "category_id": 2 },
    onError: (error) => console.log(error.message),
    onCompleted: (data) => {
      console.log(data)
    },
  });

  useEffect(() => {
    QuestQuery();
  }, []);

  if (loading) return <>Loading</>;
  if (error) return <>`Error! ${error.message}`</>;

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

  console.log(data?.quests)

  const Question = () => {
    if (questionNumber === 0) {
      let subset = data?.quests.slice(0, 4);
      return (
        <FadeIn>
          <QuizContainer>
            <div style={{ fontSize: '24px', padding: '16px 8px' }}>
              {data?.quests[0].question}
            </div>
            <div style={{ fontSize: '16px', padding: '16px 8px' }}>
              {subset?.map((item, index) => (
                <SelectButton
                  style={selected === 1 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                  onClick={() => setSelected(1)}
                >
                  {item.choice}
                </SelectButton>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <NextButton onClick={() => NextQuestion()}>Next</NextButton>
            </div>
          </QuizContainer>
        </FadeIn>
      )
    } else if (questionNumber === 1) {
      let subset = data?.quests.slice(4, 8);
      return (
        <FadeIn>
          <QuizContainer>
            <div style={{ fontSize: '24px', padding: '16px 8px' }}>
              {data?.quests[4].question}
            </div>
            <div style={{ fontSize: '16px', padding: '16px 8px' }}>
              {subset?.map((item, index) => (
                <SelectButton
                  style={selected === 1 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                  onClick={() => setSelected(1)}
                >
                  {item.choice}
                </SelectButton>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <NextButton onClick={() => NextQuestion()}>Next</NextButton>
            </div>
          </QuizContainer>
        </FadeIn>
      )
    } else if (questionNumber === 2) {
      let subset = data?.quests.slice(8, 12);
      return (
        <FadeIn>
          <QuizContainer>
            <div style={{ fontSize: '24px', padding: '16px 8px' }}>
              {data?.quests[8].question}
            </div>
            <div style={{ fontSize: '16px', padding: '16px 8px' }}>
              {subset?.map((item, index) => (
                <SelectButton
                  style={selected === 1 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                  onClick={() => setSelected(1)}
                >
                  {item.choice}
                </SelectButton>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <NextButton onClick={() => NextQuestion()}>Next</NextButton>
            </div>
          </QuizContainer>
        </FadeIn>
      )
    } else if (questionNumber === 3) {
      let subset = data?.quests.slice(12, 16);
      console.log(subset)
      return (
        <FadeIn>
          <QuizContainer>
            <div style={{ fontSize: '24px', padding: '16px 8px' }}>
              {data?.quests[12].question}
            </div>
            <div style={{ fontSize: '16px', padding: '16px 8px' }}>
              {subset?.map((item, index) => (
                <SelectButton
                  style={selected === 1 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                  onClick={() => setSelected(1)}
                >
                  {item.choice}
                </SelectButton>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <NextButton onClick={() => NextQuestion()}>Next</NextButton>
            </div>
          </QuizContainer>
        </FadeIn>
      )
    } else if (questionNumber === 4) {
      let subset = data?.quests.slice(16, 20);
      return (
        <FadeIn>
          <QuizContainer>
            <div style={{ fontSize: '24px', padding: '16px 8px' }}>
              {data?.quests[16].question}
            </div>
            <div style={{ fontSize: '16px', padding: '16px 8px' }}>
              {subset?.map((item, index) => (
                <SelectButton
                  style={selected === 1 ? { backgroundColor: `${Color.ACCENT_COLOR}`, color: '#FFFFFF' } : {}}
                  onClick={() => setSelected(1)}
                >
                  {item.choice}
                </SelectButton>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <NextButton onClick={() => NextQuestion()}>Next</NextButton>
            </div>
          </QuizContainer>
        </FadeIn>
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
