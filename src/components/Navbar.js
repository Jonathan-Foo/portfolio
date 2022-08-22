import React from 'react'
import styled, {css} from 'styled-components'
import {animate, motion} from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';

const containerAnim = {
  animate: {
    transition: {
      delayChildren: 1,
    },
  },
};

const letterAni ={
  initial: { 
    // y: 200,
    opacity: 0,
  },
  animate: {
    // y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 2,
    },
  },
};

function Navbar() {
  const hoverAnim = {
    scale: 1.1
  }
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIntroComplete(true);
    }, 2000);
  }, []);

  return (
    <NavWrapper intro={introComplete}>
      <motion.ul 
        variants={containerAnim}
        initial='initial'
        animate='animate'
        >
        <motion.li whileHover={hoverAnim} variants={letterAni}>ABOUT ME</motion.li>
        <motion.li whileHover={hoverAnim} variants={letterAni}>PROJECTS</motion.li>
        <motion.li whileHover={hoverAnim} variants={letterAni}>CONTACTS</motion.li>
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
    // border: 1px solid red;

    ul {
      display: flex;
      gap: 2rem;
      font-size: 2rem;
      font-weight: 400;
      
      
      
      li {
        position: relative;
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
        }
  
        &:hover {
          color: ${({theme}) => theme.color.text};
          &:after {
            width: 100%;
            left: 0;
            background: ${({theme}) => theme.color.text};
          }
        }

      }
    }
`



export default Navbar

