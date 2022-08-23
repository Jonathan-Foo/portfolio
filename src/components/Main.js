import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Content from "./Content";

export default function Main({ pageNumber }) {
	return (
		<MainWrapper>
			<Navbar />
			<Content pageNumber={pageNumber} />
		</MainWrapper>
	);
}

const MainWrapper = styled.main`
	position: absolute;
	width: 100%;
	height: 100%;
`;
