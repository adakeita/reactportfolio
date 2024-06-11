import goingScreenshot from "../assets/projectscreensht/going-scr.png";
import goingLogo from "../assets/projectimg/going-logo.png";
import holidazeLogo from "../assets/projectimg/holidaze.png";
import holidazeScreenshot from "../assets/projectscreensht/holidaze-scr.png";
import cleanslateLogo from "../assets/projectimg/cleanslate.png";
import cleanslateScreenshot from "../assets/projectscreensht/cs-scre.png";

const featuredData = [
  {
    id: 1,
    title: "GoingTwice",
    description: "GoingTwice, an auction mockup for preloved items",
    screenshotUrl: goingScreenshot,
    imageUrl: goingLogo,
    githubUrl: "https://github.com/adakeita/",
    liveUrl: "https://goingtwice.netlify.app/",
    stack: "ReactJS, TailwindCSS, Custom CSS.",
  },
  {
    id: 2,
    title: "Holidaze",
    description: "Holidaze, a hotel booking site",
    screenshotUrl: holidazeScreenshot,
    imageUrl: holidazeLogo,
    githubUrl: "https://holidaze.netlify.app/",
    liveUrl: " ",
    stack: "ReactJS, TailwindCSS, Custom CSS.",
  },

  {
    id: 3,
    title: "CleanSlate",
    description: "Chore logger for housework",
    screenshotUrl: cleanslateScreenshot,
    imageUrl: cleanslateLogo,
    githubUrl: "https://github.com/adakeita/cleanslate",
    liveUrl: "https://cleanslate.adakeita.dev",
    stack: "ReactJS, Custom CSS, supabase",
  },
];

export default featuredData;
