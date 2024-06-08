import screenshotSquareEyes from "../assets/projectscreensht/screenshot-squareeyes.png";
import logoWhiteBlue from "../assets/projectimg/logo-white-blue.png";
import screenshotSoilmates from "../assets/projectscreensht/screenshot-soilmates.png";
import soilmatesLogo from "../assets/projectimg/soilmates-logo2.png";
import screenshotMuseum from "../assets/projectscreensht/scr-museum.png";
import logoMuseum from "../assets/projectimg/museum.png";
import goingScreenshot from "../assets/projectscreensht/going-scr.png";
import goingLogo from "../assets/projectimg/going-logo.png";

const projectData = [
	{
		title: "SquareEyes",
		description: "SquareEyes is a mockup of a streaming platform",
		screenshotUrl: screenshotSquareEyes,
		imageUrl: logoWhiteBlue,
		githubUrl: "https://github.com/adakeita/squareeyes",
		liveUrl: "https://casquareeyes.netlify.app/",
		stack: "HTML, CSS, JS.",
	},
	{
		title: "Soilmates",
		description: "Soilmates is a blogsite with a wp-database.",
		screenshotUrl: screenshotSoilmates,
		imageUrl: soilmatesLogo,
		githubUrl: "https://github.com/Noroff-FEU-Assignments/project-exam-1-adakeita",
		liveUrl: "https://noroffsoilmates.vercel.app/",
		stack: "HTML, CSS, JS.",
	},

	{
		title: "Museum",
		description: "Community Museum, a mockup of a website for a science museum",
		screenshotUrl: screenshotMuseum,
		imageUrl: logoMuseum,
		githubUrl: "https://github.com/adakeita/communitymuseum",
		liveUrl: "https://communitymuseum.netlify.app/",
		stack: "HTML, CSS.",
	},

	{
		title: "GoingTwice",
		description: "GoingTwice, an auction mockup for preloved items",
		screenshotUrl: goingScreenshot,
		imageUrl: goingLogo,
		githubUrl: "https://github.com/adakeita/",
		liveUrl: "https://goingtwice.netlify.app/",
		stack: "ReactJS, TailwindCSS, Custom CSS.",
	},
];

export default projectData;
