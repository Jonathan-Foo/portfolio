import React from 'react'
import styled, { css } from 'styled-components'
import {motion} from 'framer-motion';

const containerAnim = {
  animate: {
    transition: {
      delayChildren: 1,
    },
  },
};

const letterAni ={
  initial: { 
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 2,
    },
  },
};

function Navbar({ pageNumber, setPageNumber }) {
  return (
    <NavWrapper >
      <motion.ul 
        variants={containerAnim}
        initial='initial'
        animate='animate'
        >
        <Links variants={letterAni} $active={pageNumber === 1} onClick={() => setPageNumber(1)}>ABOUT ME</Links>
        <Links variants={letterAni} $active={pageNumber === 2} onClick={() => setPageNumber(2)}>PROJECTS</Links>
        <Links variants={letterAni} $active={pageNumber === 3} onClick={() => setPageNumber(3)}>CONTACTS</Links>
      </motion.ul>
      
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
    width: 100%;
    background: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-inline: 6%;
    padding-top: 1.5%;
    
    ul {
      display: flex;
      gap: 2rem;
      font-size: 2rem;
      font-weight: 400;

      @media(max-width: 600px) {
        font-size: 1.2rem;
        gap: 1rem;
        font-weight: 600;
      }

      @media(max-width: 400px) {
        font-size: 1rem;
        gap: 1rem;
        font-weight: 600;
      }
    }

    
`

const Links = styled(motion.li)`
  position: relative;
  color: ${(props) => props.$active && "#00bd35"}; 
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: ${({theme}) => theme.color.text};
    transition: 400ms ease;
    ${(props) => props.$active && css`
    width: 100%;
    left: 0;
    `}; 
  }

  &:hover {
    color: ${({theme}) => theme.color.text};
    &:after {
      width: 100%;
      left: 0;
      background: ${({theme}) => theme.color.text};
    }
  }

  
`

export default Navbar

