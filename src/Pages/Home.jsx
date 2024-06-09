import { useEffect, useRef } from "react";
import Skills from "../components/Skills/Skills";
import FeaturedProjectCard from "../components/FeaturedProjectCard/FeaturedProjectCard";
import featuredData from "../data/featuredData";
import HeroImg from "../assets/img/graphic-ada.png";
import GithubLogo from "../assets/outside-logos/github-mark-white.png";

import "../Styles/Home.css";

const Home = () => {
  const sectionsRef = useRef([]);
  sectionsRef.current = [];

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    const options = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
          observer.unobserve(entry.target);
        }
      });
    }, options);

    sectionsRef.current.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="content-homepage">
      <section className="hero-section" ref={addToRefs}>
        <div className="hero-txt">
          <h1>Hi, I&apos;m Ada Keita</h1>
          <p>Welcome to my portfolio</p>
        </div>
        <div className="hero-image-wrapper">
          <img
            className="hero-image"
            src={HeroImg}
            alt="Graphic novel style image of AdaKeita"
          />
        </div>
      </section>
      <div className="page-content page-content_home">
        <section className="about-me" role="article" ref={addToRefs}>
          <h2>WebDev Origin Story</h2>
          <p  className="typewriter-text text_about-me">
            At the age of 28, Ada Keita&apos;s life took an unexpected turn. A
            mysterious code in a dusty old book caught her eye, a language she
            later discovered to be JavaScript. Intrigued, she embarked on a
            quest to decipher the language, enrolling in Noroff, a renowned
            institution known for shaping web warriors.
          </p>
          <p className="text_about-me">
            There, she delved into the depths of technology, battling bugs,
            decoding algorithms, and creating elegant solutions. She found her
            passion in JavaScript and cybersecurity, vowing to use her skills to
            create and protect, ensuring a safer web experience for all. Now,
            two years later, Ada stands as a seasoned web developer, her
            portfolio a testament to her journey so far and a window into the
            future she&apos;s building. Welcome to her digital realm.
          </p>
        </section>
        <section className="featured-projects" ref={addToRefs}>
          <h2 className="header_featured">Featured Projects</h2>
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
        <Skills />
      </div>
      <section className="contact_home" ref={addToRefs}>
        <div className="contact-content-wrapper_home">
          <h2>Contact Me</h2>
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
                >
                  <img
                    className="github-logo"
                    src={GithubLogo}
                    alt="github-logo"
                  />
                </a>
                <p className="github-txt">Github</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
