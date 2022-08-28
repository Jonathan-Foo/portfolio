import React from "react";
import styled from "styled-components";
import skillsInfo from "./skillsInfo";

function SkillsTable() {

  return (
    <GridContainer>
    {skillsInfo.map((skill, index) => (
      <Cell key={index}>
        <img src={skill.src} alt={skill.name} />
        <p>{skill.name}</p>
      </Cell>
    ))}
    </GridContainer>
  )
}

const GridContainer = styled.div`
  margin-top: 0.4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  outline: 1px dashed white;
  
`

const Cell = styled .div`
  display: flex;
  width: 11.1%;
  height: 100%;
  padding-block: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  gap: .5rem;
  outline: 1px dashed white;
  background-color: rgba(255, 255, 255, 0.2);
  img{
    width: 50%;
  }
  p{
    font-weight: 800;
    font-size: .9rem;
  }

  @media(max-width: 600px){
    width: 16.65%;
    p{
      display: none;
    }
  }
`
export default SkillsTable;
