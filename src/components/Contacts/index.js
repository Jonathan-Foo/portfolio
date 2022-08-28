import React from 'react';
import styled from 'styled-components';
import github from '../../assets/github.svg';
import email from '../../assets/email.svg';
import linkedin from '../../assets/linkedin.svg';
import Tilt from "react-parallax-tilt";
import {motion} from 'framer-motion';

const Icon = ({top, left, src, alt, link}) => {
  return (
    <IconWrapper 
        glareEnable={true}
			  glareBorderRadius="100%"
        top={top}
        left={left}
      >  
        <a href={link} target="_blank">
          <img src={src} alt={alt} />
        </a>  
    </IconWrapper>
  )
}


const Contacts = () => {
  return (
    <ContactsContainer >
      <Icon src={github} alt="github" link="https://github.com/Jonathan-Foo"/>
      <Icon src={email} alt="email" link="mailto:jonathan.foozh@gmail.com"/>
      <Icon src={linkedin} alt="linkedin" link="https://www.linkedin.com/in/jonathan-foo-597980233/"/>
    </ContactsContainer>
  )
}

const ContactsContainer = styled(motion.main)`
    width: 100%;
    display: flex; 
    justify-content: center;
    align-items: center;
    position: relative;
    height: 75vh;
    gap: 15%;
    
    @media(max-width: 600px) {
      flex-direction: column;
      margin-top: 5rem;
      
    }

`

const IconWrapper = styled(Tilt)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  width: 10%;
  border-radius: 100%;
  box-shadow: 0 0 50px 10px rgba(0,0,0,0.2);
  

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  img {
    width: 100%;
    background: #FFF;
    border-radius: 100%;
    outline: 5px solid #FFF;
  } 

  &:hover {
    div {
      transform: scale(1.5);
    }
    img {
      transform: scale(1.5); 
      transition: 150ms ease-in-out;
      
    } 
  }

  @media(max-width: 600px) {
    width: 20%;
    
  }
`

export default Contacts

