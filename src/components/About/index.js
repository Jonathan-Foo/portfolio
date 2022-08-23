import React from "react";
import Tilt from "react-parallax-tilt";
import styled from "styled-components";
import SkillsTable from "./SkillsTable";
import profileImage from "../../assets/profileImage.jpg";
import snowboardEmoji from "../../assets/snowboard.png";
import tech from "../../assets/tech.png";

const Hobbies = ({ src, alt, top, left, width, padding, color }) => {
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
		>
			<img src={src} alt={alt} />
		</HobbiesWrapper>
	);
};

function AboutMe() {
	return (
		<>
			<ParallaxContainer>
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
				top={10}
				left={20}
				width={10.2}
				padding={1.6}
				color="255, 255, 75"
			/>
			<Hobbies
				src={tech}
				alt="coding"
				top={30}
				left={10}
				width={13}
				padding={2.5}
				color="255, 56, 56"
			/>
		</>
	);
}

const ParallaxContainer = styled(Tilt)`
	background: rgba(255, 255, 255, 0.2);
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-inline: 2%;
	padding-block: 1.3%;
	width: 50%;
	height: 85%;
	border-radius: 15px;
	backdrop-filter: blur(45px);
	margin-top: -5%;
	// outline: 1px dashed #fff;

	-webkit-transform-style: preserve-3d;

	span {
		font-weight: 700;
	}

	p {
		font-size: 1.2rem;
	}
`;

const ProfileImage = styled.img`
	height: 46%;
	align-self: center;
	border-radius: 10px;
	// outline: 1px dashed #fff;
	transform: translateZ(100rem);
`;
const HobbiesWrapper = styled(Tilt)`
  position: absolute;
  width: ${(props) => props.width}%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba( ${(props) => props.color}, 1);
  backdrop-filter: blur(45px);
  border-radius: 100%;
  padding: ${(props) => props.padding}%;rem;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  
  
  img {
    height: 100%;
    width: 100%;
  }

`;

export default AboutMe;
