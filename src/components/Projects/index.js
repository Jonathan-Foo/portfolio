import React from "react";
import Slider from "./Slider";
import styled from "styled-components";
import {motion} from 'framer-motion';

function Projects() {
	return (
		<Container>
			<Slider />
		</Container>
	);
}

const Container = styled(motion.main)`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: center;
	align-items: center;
	color: inherit;
	h2 {
		font-size: 5rem;
		margin: 0;
		padding: 0;
	}
`;
export default Projects;
