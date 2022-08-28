import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const containerAnim = {
	animate: {
		transition: {
			staggerChildren: 0.4,
		},
	},
};

const letterAnim = {
	initial: {
		y: 200,
	},
	animate: {
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1,
		},
	},
};

function Title() {
	return (
		<Container variants={containerAnim} initial="initial" animate="animate">
			<Name variants={letterAnim}>JONATHAN FOO</Name>
			<TitleText variants={letterAnim}>FULL STACK DEVELOPER</TitleText>
		</Container>
	);
}

const Container = styled(motion.div)`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
	// outline: 1px solid red;
	padding-inline: 4%;
	padding-top: 2%;
	overflow: hidden;

	@media(max-width: 1300px) {
		padding-top: 10%;
	}

	@media(max-width: 850px) {
		padding-top: 15%;
		h1:first-child{
			font-size: 3.5rem;
			margin-bottom: -1rem;
		}
		h1:last-child{
			font-size: 3rem;
		}
	}

	@media(max-width: 600px) {
		padding-top: 20%;
		h1:first-child{
			font-size: 2.5rem;
			margin-bottom: -1rem;
		}
		h1:last-child{
			font-size: 2rem;
		}
	}
`;
const Name = styled(motion.h1)`
	font-size: 6rem;
	font-weight: 900;
	color: ${({ theme }) => theme.color.grey};
	margin-bottom: -2rem;
`;

const TitleText = styled(motion.h1)`
	font-size: 5rem;
	font-weight: 400;
	font-style: italic;
	color: ${({ theme }) => theme.color.grey};
`;

export default Title;
