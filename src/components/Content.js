import React from "react";
import styled from "styled-components";
import AboutMe from "./About";
import Projects from "./Projects";
import Contacts from "./Contacts";
import {motion, AnimatePresence} from 'framer-motion';

const contentVariant = {
	initial: {
		opacity: 0,
		
		y: 800,
	},
	animate: {
		opacity: 1,
		y: 0,
		
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1,
			delay: .3,
		},
	},
	exit: {
		opacity: 0,
		y: 800,
	}
}


const MainContent = ({ pageNumber }) => {
	switch(pageNumber) {
		case 1: 
			return (<AboutMe />);
		case 2: 
			return (<Projects />); 
		case 3: 
			return (<Contacts />);
		default:
			return 
	}
}


function Content({ pageNumber }) {
	return (
		<ContentWrapper>
			<AnimatePresence initial={false}>
				<MotionContainer variants={contentVariant}  initial="initial" animate="animate" exit="exit" key={pageNumber}  >
					<MainContent pageNumber={pageNumber} />
				</MotionContainer>
			</AnimatePresence>
		</ContentWrapper>
	);
}


const ContentWrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	// overflow: hidden;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const MotionContainer = styled(motion.div)`
	width: 100%;
`




export default Content;
