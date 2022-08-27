import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Content from "./Content";

export default function Main({ pageNumber, setPageNumber }) {
	return (
		<MainWrapper>
			<Navbar pageNumber={pageNumber} setPageNumber={setPageNumber}/>
			<Content pageNumber={pageNumber} />
		</MainWrapper>
	);
}

const MainWrapper = styled.main`
	position: absolute;
	width: 100%;
`;
