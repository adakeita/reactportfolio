import screenshotSoilmates from "../assets/projectscreensht/screenshot-soilmates.png";
import soilmatesLogo from "../assets/projectimg/soilmates-logo2.png";
import screenshotMuseum from "../assets/projectscreensht/scr-museum.png";
import logoMuseum from "../assets/projectimg/museum.png";
import goingScreenshot from "../assets/projectscreensht/going-scr.png";
import goingLogo from "../assets/projectimg/going-logo.png";
import btwLogo from "../assets/projectimg/btw-small.svg";
import screenshotBtw from "../assets/projectscreensht/buy-scre.png";
import holidazeLogo from "../assets/projectimg/holidaze.png";
import holidazeScreenshot from "../assets/projectscreensht/holidaze-scr.png";
import portfolioLogo from "../assets/svg/adakeita-logo.svg";
import screenshotPortfolio from "../assets/projectscreensht/portfolio-scre.png";

const projectData = [
  {
    id: 2,
    title: "Holidaze",
    year: "2024",
    description: "Holidaze is a mockup of a booking site for hotels",
    longDescription:
      "Holidaze is a mockup of a booking site for hotels. The project was made with ReactJS and TailwindCSS in addition to custom CSS. I learned a lot about ReactJS and TailwindCSS while making this project.",
    screenshotUrl: holidazeScreenshot,
    imageUrl: holidazeLogo,
    githubUrl: "https://github.com/adakeita/holidaze",
    liveUrl: "https://statuesque-narwhal-83f49f.netlify.app/",
    stack: "ReactJS, TailwindCSS, Custom CSS.",
  },
  {
    id: 4,
    title: "BuyTheWay",
    year: "2024",
    description: "BuyTheWay is a mockup of a webshop",
    longDescription:
      "BuyTheWay is a mockup of a webshop. The project was made with ReactJS and TailwindCSS in addition to custom CSS. I learned a lot about ReactJS and TailwindCSS while making this project.",
    screenshotUrl: screenshotBtw,
    imageUrl: btwLogo,
    githubUrl: "https://github.com/adakeita/buytheway",
    liveUrl: "https://effulgent-rolypoly-7c23a7.netlify.app/",
    stack: "ReactJS, TailwindCSS, Custom CSS.",
  },
  {
    id: 5,
    title: "Portfolio",
    year: "2024",
    description: "My actual portfolio, hi!",
    longDescription:
      "Portfolio is my portfolio. You're on it right now! The design was done mostly in figma, and some of it just in my head. Its a straight up vanilla react project with some custom css and a dash ow tailwind. I'm very happy with how it turned out and how is shows my personality. Hope you like it too!",
    screenshotUrl: screenshotPortfolio,
    imageUrl: portfolioLogo,
    githubUrl: "https://github.com/adakeita/reactportfolio",
    liveUrl: "https://devadakeita.netlify.app/",
    stack: "ReactJS, TailwindCSS, Custom CSS.",
  },
  {
    id:6,
    title: "Soilmates",
    year: "2023",
    description: "Soilmates, plants and gardening blogsite",
    longDescription:
      "Soilmates is a plant-blogsite. The project was made with HTML, CSS and JS and is using wordpress as a headless cms. Soilmates was my first year exam, and I have to say I'm very happy with how it turned out. I learned a lot about headless cms's, designprocesses and how to use them in a project. It is one of the projects I look back on most fondly.",
    screenshotUrl: screenshotSoilmates,
    imageUrl: soilmatesLogo,
    githubUrl:
      "https://github.com/Noroff-FEU-Assignments/project-exam-1-adakeita",
    liveUrl: "https://noroffsoilmates.vercel.app/",
    stack: "HTML, CSS, JS.",
  },
  {
    id: 1,
    title: "GoingTwice",
    year: "2023",
    description: "Auction site for preloved items",
    longDescription:
      "GoingTwice is a mockup of an auction site for preloved items. The project was made with ReactJS and TailwindCSS in addition to custom CSS. The backend was the Noroff API. I used this project to gain more insight into ReactJS.",
    screenshotUrl: goingScreenshot,
    imageUrl: goingLogo,
    githubUrl: "https://github.com/adakeita/",
    liveUrl: "https://goingtwice.netlify.app/",
    stack: "ReactJS, Tailwind, Custom CSS.",
  },
  {
    id: 7,
    title: "Community Museum",
    year: "2022",
    description: "Science museum for kids and families",
    longDescription:
      "Community Museum is a mockup of a website for a science museum geared towards our smallest scientists and families. The project was made with HTML and CSS. As the assignment was for a museum, it was extra important to make the site accessible and easy to navigate. This was as you can tell prior to my project naming skills.",
    screenshotUrl: screenshotMuseum,
    imageUrl: logoMuseum,
    githubUrl: "https://github.com/adakeita/communitymuseum",
    liveUrl: "https://communitymuseumsa.netlify.app/",
    stack: "HTML, CSS.",
  },
];

export default projectData;
