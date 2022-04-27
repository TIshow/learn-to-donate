import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// image
import TOP_IMG from '../static/art_top.jpeg';
import LOGO from '../static/logo.png';

// style
import styled from 'styled-components';

const Top: React.FC = () => {
  const navigate = useNavigate();

  // if (loading) return <Loading />;

  return (
    <>
      <TopContainer>
        Top
      </TopContainer>
    </>
  );
};

const TopContainer = styled.div`
  position: relative;
  background-color: #FFFFFF;
  max-width: 100%;
  max-height: 100%;
`

const Title = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
`

export default Top;