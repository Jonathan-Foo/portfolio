import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (
    <NavWrapper>
      <Title>PORTFOLIO</Title>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
    width: 100%;
    height: 5rem;
    background: #fff;
    display: flex;
    align-items: center;
    padding: 1rem;
    color: ;  
`

const Title = styled.h1`
    color: ;
`

export default Navbar

