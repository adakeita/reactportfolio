import Skills from "../components/Skills/Skills";
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects';
import HeroImg from "../assets/img/graphic-ada.png";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import "../Styles/Home.css"

const Home = () => {
    return (
        <div className="content-homepage">
            <section className="hero-section">
                <div className="hero-txt">
                    <h1>Hi, I&apos;m Ada Keita</h1>
                    <p>Welcome to my portfolio</p>
                </div>
                <div className="hero-image-wrapper">
                    <img className="hero-image" src={HeroImg} alt="Graphic novel style image of AdaKeita" />
                </div>
            </section>
            <div className="page-content">
                <section className="about-me" role="article">
                    <h2>WebDev Origin Story</h2>
                    <p>
                        At the age of 28, Ada Keita&apos;s life took an unexpected turn. A mysterious code in a dusty old book
                        caught her eye, a language she later discovered to be JavaScript. Intrigued, she embarked on a quest to
                        decipher the language, enrolling in Noroff, a renowned institution known for shaping web warriors.
                    </p>
                    <p>
                        There, she delved into the depths of technology, battling bugs, decoding algorithms, and creating
                        elegant solutions. She found her passion in JavaScript and cybersecurity, vowing to use her skills to
                        create and protect, ensuring a safer web experience for all.
                        Now, two years later, Ada stands as a seasoned web developer, her portfolio a testament to her journey
                        so far and a window into the future she&apos;s building. Welcome to her digital realm.
                    </p>
                </section>
                <Skills />
                <FeaturedProjects />
                <section className="contact">
                    <h2>Contact Me</h2>
                    <div className="contact-row">
                        <div className="email-wrapper">
                            <p className="email-p">Email me</p>
                            <a role="button" href="mailto:hello@adakeita.dev" aria-label="Send an email to hello@adakeita.dev">hello@adakeita.dev</a>
                        </div>
                        <div className="github-wrapper">
                            <div className="github-img-wrapper">
                                <a className="github-link" href="https://www.github.com/adakeita">
                                    <img className="github-logo" src="images/github-mark-white.png" alt="github-logo" />
                                </a>
                                <p className="github-txt">Github</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
