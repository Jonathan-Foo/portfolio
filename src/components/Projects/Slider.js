import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import projectInfo from "./Cards/projectInfo";
import Cards from "./Cards/index";
import styled from "styled-components";
import leftArrow from "../../assets/left.png";
import rightArrow from "../../assets/right.png";

const sliderVariants = {
	incoming: (direction) => ({
		x: direction > 0 ? "100%" : "-100%",
		scale: 0.2,
		opacity: 0,
	}),
	active: { x: 0, scale: 1, opacity: 1 },
	exit: (direction) => ({
		x: direction > 0 ? "-100%" : "100%",
		scale: 0.2,
		opacity: 0,
	}),
};

const sliderTransition = {
	duration: 1,
	ease: [0.56, 0.03, 0.12, 1.04],
};

function Slider() {
	const [[imageCount, direction], setImageCount] = useState([0, 0]);

	const activeImageIndex = wrap(0, projectInfo.length, imageCount);

	const swipeToImage = (swipeDirection) => {
		setImageCount([imageCount + swipeDirection, swipeDirection]);
	};

	const dragEndHandler = (dragInfo) => {
		const draggedDistance = dragInfo.offset.x;
		const swipeThreshold = 50;
		if (draggedDistance > swipeThreshold) {
			swipeToImage(-1);
		} else if (draggedDistance < -swipeThreshold) {
			swipeToImage(1);
		}
	};

	return (
		<Container>
			<SliderContainer>
				<Options>
					<motion.button whileHover={{scale: 1.3}} whileTap={{scale: 0.9}} onClick={() => swipeToImage(-1)}><img src={leftArrow} alt="previous" /></motion.button>
					<motion.button whileHover={{scale: 1.3}} whileTap={{scale: 0.9}} onClick={() => swipeToImage(1)}><img src={rightArrow} alt="next" /></motion.button>
				</Options>

				<SlideWrapper>
					<AnimatePresence initial={false} custom={direction}>
						<MotionDiv
							key={imageCount}
							custom={direction}
							variants={sliderVariants}
							initial="incoming"
							animate="active"
							exit="exit"
							transition={sliderTransition}
							drag="x"
							dragConstraints={{ left: 0, right: 0 }}
							dragElastic={1}
							onDragEnd={(_, dragInfo) =>
								dragEndHandler(dragInfo)
							}
							className="image"
						>
							<Cards activeImageIndex={activeImageIndex} />
						</MotionDiv>
					</AnimatePresence>
				</SlideWrapper>	
			</SliderContainer>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-block: 5.5%; 
`;

const SliderContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	
`;

const SlideWrapper = styled.div`
	position: relative;
	width: ${({theme}) => theme.card.width};
	height: ${({theme}) => theme.card.height};
	display: flex;
	justify-content: center;
	align-items: center;
`;

const MotionDiv = styled(motion.div)`
	position: absolute;
	height: 100%;
	width: 100%;
	backdrop-filter: blur(45px);
	display: flex;
	justify-content: center;
	align-items: center;
	will-change: transform, opacity;
	border-radius: 15px;

	&:hover {
		cursor: grab;
	}

	&:active {
		cursor: grabbing;
		transform: scale(0.8);
	}
`;

const Options = styled.div`
	position: absolute;
	display: flex;
	width: 120%;
	height: 100%;
	justify-content: space-between;
	align-items: center;

	button {
		outline: none;
		border: none;
		user-select: none;
		transition: 0.07s ease-out transform;
		background: none;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;

		img {
			height: 30%;
			width: 30%;
		}
	}
`;

export default Slider;
