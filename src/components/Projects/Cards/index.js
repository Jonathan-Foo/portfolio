import React from "react";
import projectInfo from "./projectInfo";
import styled from "styled-components";
import {motion} from 'framer-motion';


function Cards({ activeImageIndex }) {
	return <CardWrapper >
		{projectInfo[activeImageIndex].project ? 
			( 	
				<>
				<Preview autoPlay muted >
					<source src={projectInfo[activeImageIndex].gifSrc} type="video/mp4"/>
				</Preview>
				<Overlay>
					<h2>{projectInfo[activeImageIndex].title}</h2>
					<p>{projectInfo[activeImageIndex].description}</p>
					<div className="links">
						<motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} href={projectInfo[activeImageIndex].codeSrc} target="_blank">Code</motion.a>
						<span>|</span>
						<motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} href={projectInfo[activeImageIndex].liveSrc} target="_blank">Preview</motion.a>
					</div>
				</Overlay>		
				</>
			) : (
				<OpenSource>
					<div className="title">
						<img src={projectInfo[activeImageIndex].logoSrc} alt="Open Source Logo" />
						<h2>{projectInfo[activeImageIndex].title}</h2>
					</div>
					<div className="details">
						{
							projectInfo[activeImageIndex].contributions.map((info, index) => (
								<div key={index}>
									<a rel="noreferrer" href={info.repoSrc} target="_blank" >{info.repoName}</a>
									<span> | </span>
									<a rel="noreferrer" href={info.prSrc} target="_blank">PR example</a>
								</div>
							))
						}
					</div>
				</OpenSource>
			)
		}
		</CardWrapper>;
}

const CardWrapper = styled.article`
	position: relative;
	background: rgba(255, 255, 255, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${({theme}) => theme.card.width};
	height: ${({theme}) => theme.card.height};
	border-radius: 15px;
	overflow: hidden;
	box-shadow: 0 0 50px 10px rgba(0,0,0,0.2);
	

	@media (max-width: 600px) {
		width: ${({theme}) => theme.card.mobileWidth};
		height: ${({theme}) => theme.card.mobileHeight};
	}
`;

const Preview = styled.video`
	height: 100%;
`
const Overlay = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	padding: 1rem;
	outline: 1px solid red;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: 200ms ease-in-out;
	text-align: center;
	gap: 1rem;
	font-size: 1.1rem;

	h2,
	a,
	span,
	p {
		opacity: 0;
		color: #fff;
	}

	p{
		margin-top: -1rem;
	}

	.links {
		display: flex;
		justify-content: center;
		gap: 1rem;
		font-size: 1.1rem;
	}

	&:hover{
		background: rgba(0,0,0,0.8);
		
		h2,
		a,
		span,
		p {
			opacity: 1;		
		}

	}

	@media (max-width: 600px) {
		h2 {
			font-size: 2.5rem;
		}
	}
`

const OpenSource = styled.div`
	display: flex;
	flex-direction: column;
	align-self: flex-start;
	align-items: center;
	justify-content: center;
	padding-block: 1.5rem;
	font-size: 1.3rem;

	
	.title{
		display: flex;
		gap: 1rem;
		align-items: center;
		justify-content: center;
		margin-bottom: 3%;
		h2 {
			font-size: 4rem;
		}

		img{
			width: 8%;
		}
	}

	.details {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		justify-content: center;
		align-self: center;
		text-align: center;
		font-size: 2.5rem;
		
		a:first-child {
			font-weight: 600;
			
			&:hover {
				color: ${({theme}) => theme.color.text};
			}
		}

		a:last-child {
			font-style: italic;

			&:hover {
				color: ${({theme}) => theme.color.text};
			}
		}
	}

	@media (max-width: 600px) {
		.title {
			margin-bottom: 10%;
			h2 {
				font-size: 1.5rem;
			}
		}
		.details{
			font-size: 1.3rem;
		}
	}
`
export default Cards;
