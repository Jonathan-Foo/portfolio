import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

export default function Main() {
  return (
    <MainWrapper>
      <Navbar />
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
    position: absolute;
    width: 100%; 
`