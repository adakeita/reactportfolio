import handleViewport from "react-in-viewport";
import Skills from "../components/Skills/Skills";
import FeaturedProjectCard from "../components/FeaturedProjectCard/FeaturedProjectCard";
import featuredData from "../data/featuredData";
import HeroImg from "../assets/img/graphic-ada.png";
import GithubLogo from "../assets/outside-logos/github-mark-white.png";
import "../Styles/Home.css";

const Section = ({
  children,
  forwardedRef,
  inViewport,
  enterCount,
  animationClass,
}) => (
  <section
    ref={forwardedRef}
    className={`${animationClass} ${
      inViewport || enterCount > 0 ? "in-view" : "initial"
    }`}
  >
    {children}
  </section>
);

const ViewportSection = handleViewport(Section);

const Home = () => {
  return (
    <div className="content-homepage">
      <section className="hero-section" aria-labelledby="hero-heading">
        <div className="hero-txt">
          <h1 id="hero-heading">Hi, I&apos;m Ada Keita</h1>
          <p>Welcome to my portfolio</p>
        </div>
        <div className="hero-image-wrapper">
          <img
            className="hero-image"
            src={HeroImg}
            alt="Graphic novel style image of Ada Keita"
          />
        </div>
      </section>
      <div className="page-content page-content_home">
        <ViewportSection animationClass="about-me-section slide-in-right">
          <section className="about-me" aria-labelledby="about-me-heading">
            <h2 id="about-me-heading">WebDev Origin Story</h2>
            <p className="typewriter-text text_about-me">
              At the age of 28, Ada Keita&apos;s life took an unexpected turn. A
              mysterious code in a dusty old book caught her eye, a language she
              later discovered to be JavaScript. Intrigued, she embarked on a
              quest to decipher the language, enrolling in Noroff, a renowned
              institution known for shaping web warriors.
            </p>
            <p className="text_about-me">
              There, she delved into the depths of technology, battling bugs,
              decoding algorithms, and creating elegant solutions. She found her
              passion in JavaScript and cybersecurity, vowing to use her skills
              to create and protect, ensuring a safer web experience for all.
              Now, two years later, Ada stands as a seasoned web developer, her
              portfolio a testament to her journey so far and a window into the
              future she&apos;s building. Welcome to her digital realm.
            </p>
          </section>
        </ViewportSection>
        <ViewportSection animationClass="featured-projects-section slide-in-left">
          <section
            className="featured-projects"
            aria-labelledby="featured-projects-heading"
          >
            <h2 id="featured-projects-heading" className="header_featured">
              Featured Projects
            </h2>
            <div
              className="featured-projects-container
                      tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6"
              role="list"
            >
              {featuredData.map((project, index) => (
                <FeaturedProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  screenshotUrl={project.screenshotUrl}
                  imageUrl={project.imageUrl}
                  stack={project.stack}
                />
              ))}
            </div>
          </section>
        </ViewportSection>
        <Skills />
      </div>
      <ViewportSection animationClass="contact-home-section fade-in">
        <section className="contact_home" aria-labelledby="contact-heading">
          <div className="contact-content-wrapper_home">
            <h2 id="contact-heading">Contact Me</h2>
            <div className="contact-row">
              <div className="email-wrapper">
                <p className="email-p">Email me</p>
                <a
                  role="button"
                  href="mailto:hello@adakeita.dev"
                  aria-label="Send an email to hello@adakeita.dev"
                >
                  hello@adakeita.dev
                </a>
              </div>
              <div className="github-wrapper">
                <div className="github-img-wrapper">
                  <a
                    className="github-link"
                    href="https://www.github.com/adakeita"
                    aria-label="Visit Ada Keita's GitHub profile"
                  >
                    <img
                      className="github-logo"
                      src={GithubLogo}
                      alt="GitHub logo"
                    />
                  </a>
                  <p className="github-txt">GitHub</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ViewportSection>
    </div>
  );
};

export default Home;
