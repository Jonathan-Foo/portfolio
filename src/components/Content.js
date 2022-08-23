import React from "react";
import styled from "styled-components";
import AboutMe from "./About";

function Content({ pageNumber }) {
	return (
		<ContentWrapper>
			<AboutMe />
		</ContentWrapper>
	);
}

const ContentWrapper = styled.div`
	// border: 1px solid red;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Content;
