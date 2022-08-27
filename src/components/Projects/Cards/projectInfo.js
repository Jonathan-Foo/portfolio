import wheresAsterix from "../../../assets/videos/wheresAsterix.mp4";
import socialize from "../../../assets/videos/socialize.mp4";
import library from "../../../assets/videos/library.mp4";
import pokememory from "../../../assets/videos/pokememory.mp4";
import clothingStore from "../../../assets/videos/clothingStore.mp4";
import openSource from "../../../assets/openSource.png";

const projectInfo = [
	{
		id: 0,
		project: true,
		title: "Socialize",
		codeSrc: "https://github.com/Jonathan-Foo/social-media-app",
		liveSrc: "https://jonathan-foo.github.io/social-media-app/",
		description: "A social media app built using the MERN stack",
		gifSrc: socialize,
	},
	{
		id: 1,
		project: true,
		title: "ClothingStore!",
		codeSrc: "https://github.com/Jonathan-Foo/clothing-store-app",
		liveSrc: "https://jonathan-foo.github.io/clothing-store-app/",
		description: "A clothing store website built with React using Typescript",
		gifSrc: clothingStore,
	},
	{
		id: 2,
		project: true,
		title: "Library",
		codeSrc: "https://github.com/Jonathan-Foo/node-library-app",
		liveSrc: "https://node-mybrary-app.herokuapp.com/",
		description: "A library app built with Node, MongoDB and Express",
		gifSrc: library,
	},
	{
		id: 3,
		project: true,
		title: "PokeMemory Game",
		codeSrc: "https://github.com/Jonathan-Foo/pokememory-game",
		liveSrc: "https://jonathan-foo.github.io/pokememory-game/",
		description: "A React memory game built with React using data from PokeAPI",
		gifSrc: pokememory,
	},
	{
		id: 4,
		project: true,
		title: "Where's Asterix",
		codeSrc: "https://github.com/Jonathan-Foo/where-s-asterix",
		liveSrc: "https://where-s-asterix.web.app/",
		description: "A photo tagging game based on the classic Where's Wally books",
		gifSrc: wheresAsterix,
	},
	{
		id: 5,
		project: false,
		title: "Open Source Contributions",
		logoSrc: openSource,
		contributions: [
			{
				repoName: "Layer5",
				repoSrc: "https://github.com/layer5io/layer5",
				prSrc: "https://github.com/layer5io/layer5/pull/3113",
			},
			{
				repoName: "Service Mesh Patterns",
				repoSrc: "https://github.com/service-mesh-patterns/service-mesh-patterns",
				prSrc: "https://github.com/service-mesh-patterns/service-mesh-patterns/pull/60",
			},
		],
	},
	
];

export default projectInfo;
