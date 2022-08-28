import React from "react";
import Tilt from "react-parallax-tilt";
import styled, { css } from "styled-components";
import SkillsTable from "./SkillsTable";
import profileImage from "../../assets/profileImage.jpg";
import snowboardEmoji from "../../assets/snowboard.png";
import tech from "../../assets/tech.png";
import piano from "../../assets/piano.png";
import art from "../../assets/art.png";
import {motion} from 'framer-motion';
import { useState } from "react";
import { useEffect } from "react";

// const aboutVariant = {
// 	initial: {
// 		opacity: 0,
// 		y: 500,
// 	},
// 	animate: {
// 		opacity: 1,
// 		y: 0,
// 		transition: {
// 			ease: [0.6, 0.01, -0.05, 0.95],
// 			duration: 1,
// 			// staggerChildren: 0.4,
// 		},
// 	},
// 	exit: {
// 		opacity: 0,
// 		y: 500,
// 	}
// }

// const aboutVariant = {
// 	animate: {
// 		transition: {
// 			delayChildren: 0.4,
// 			staggerChildren: 0.1,
// 		},
// 	}
// }


const Hobbies = ({ src, alt, top, left, width, padding, color, mTop, mLeft }) => {
	return (
		<HobbiesWrapper
			top={top}
			left={left}
			width={width}
			padding={padding}
			color={color}
			glareEnable={true}
			glareBorderRadius="100%"
			reset={false}
			mTop={mTop}
			mLeft={mLeft}
		>
			<img src={src} alt={alt} />
		</HobbiesWrapper>
	);
};

function AboutMe() {
	const [blur, setBlur] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setBlur(true);
		}, 1200);
	});
	
	return (
		// <AboutContainer variants={aboutVariant} initial="initial" animate="animate" exit="exit">
		<AboutContainer >
			<ParallaxContainer blur={blur}>
				<ProfileImage src={profileImage} alt="Profile Image" />
				<article>
					<h2>About Me</h2>
					<p>
						Hi my name is <span>Jonathan</span>,{" "}
						<span>a full stack developer</span>, who is passionate
						about web development and learning new technologies.
						With a background in video editing and design, I strive
						to build interactive web experiences that not only
						appeal to users, but also leave{" "}
						<span>genuine meaningful impact</span>.
					</p>
				</article>
				<article>
					<h2>Skills & Technologies</h2>
					<SkillsTable />
				</article>
			</ParallaxContainer>
			<Hobbies
				src={snowboardEmoji}
				alt="snowboard"
				top={1.5}
				left={20}
				width={10.2}
				padding={1.6}
				color="255, 255, 75"
				mTop={10}
				mLeft={10}
			/>
			<Hobbies
				src={tech}
				alt="coding"
				top={27.5}
				left={14}
				width={13}
				padding={2.5}
				color="255, 56, 56"
				mTop={23}
				mLeft={2}
			/>
			<Hobbies
				src={piano}
				alt="piano"
				top={2.5}
				left={69}
				width={15}
				padding={2.5}
				color="23, 185, 255"
				mTop={8.5}
				mLeft={73}
			/>
			<Hobbies
				src={art}
				alt="art"
				top={37.5}
				left={70}
				width={8}
				padding={1.2}
				color="206, 59, 255"
				mTop={27}
				mLeft={75}
				
			/>
		</AboutContainer>
	);
}

const AboutContainer = styled(motion.main)`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-block: 2%;
	
`

const ParallaxContainer = styled(Tilt)`
	background: rgba(255, 255, 255, 0.2);
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-inline: 2.4rem;
	padding-block: 1.5rem;
	width: 50%;
	height: 85%;
	border-radius: 15px;
	backdrop-filter: blur(45px) opacity(0);
	transition: 300ms ease-in-out;
	${(props) => props.blur && css`
		backdrop-filter: blur(45px) opacity(1);
	`};

	span {
		font-weight: 700;
	}

	article {
		& > p {
			font-size: 1.2rem;
		}
	}

	@media(max-width: 600px) {
		margin-top: 5rem;
		width: 85%;
	}

	@media(max-width: 420px) {
		article {
			& > p {
				font-size: 0.9rem;
			}
		}
	}
`;

const ProfileImage = styled.img`
	width: 69%;
	align-self: center;
	border-radius: 10px;

	@media(max-width: 600px) {
		width: 80%;
	}
`;

const HobbiesWrapper = styled(Tilt)`
	position: absolute;
	width: ${(props) => props.width}%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: none;
	background: rgba(${(props) => props.color}, 0.2);
	border: 1px solid rgba( ${(props) => props.color}, 1);
	backdrop-filter: blur(45px);
	border-radius: 100%;
	padding: ${(props) => props.padding}rem;
	top: ${(props) => props.top}%;
	left: ${(props) => props.left}%;
	
	img {
		height: 100%;
		width: 100%;
	}

	@media(max-width: 600px) {
		padding: ${(props) => props.padding - .9}rem;
		width: ${(props) => props.width * 1.5}%;
		top: ${(props) => props.mTop}%;
		left: ${(props) => props.mLeft}%;
	}

`;

export default AboutMe;
