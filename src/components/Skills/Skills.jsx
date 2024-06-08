import JS from "../../assets/outside-logos/js.png";
import HTML from "../../assets/outside-logos/html.png";
import CSS from "../../assets/outside-logos/css-3.png";
import ReactLogo from "../../assets/outside-logos/physics.png";
import Postgres from "../../assets/outside-logos/postgre.png";
import SQL from "../../assets/outside-logos/sql.png";
import "./Skills.css";

const skillsData = [
    { name: "JavaScript", logo: JS, level: 80, description: "Experienced with ES6+, Async/Await, and modern JavaScript frameworks." },
    { name: "HTML & CSS", logo: HTML, level: 90, description: "Proficient in HTML5, CSS3, and responsive design with Flexbox and Grid." },
    { name: "React", logo: ReactLogo, level: 75, description: "Skilled in building single-page applications with React and hooks." },
    { name: "Postgres", logo: Postgres, level: 70, description: "Knowledgeable in relational databases and SQL queries." },
    { name: "SQL", logo: SQL, level: 85, description: "Experienced in writing complex SQL queries and optimizing database performance." },
    { name: "CSS", logo: CSS, level: 90, description: "Proficient in HTML5, CSS3, and responsive design with Flexbox and Grid." },
];

const Skills = () => (
    <section className="container_skills">
        <h2>Skills</h2>
        <div className="skills-grid">
            {skillsData.map(skill => (
                <div className="skill-card" key={skill.name}>
                    <div className="skill-card-front">
                        <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
                        <h3>{skill.name}</h3>
                        <p>Level: {skill.level}</p>
                    </div>
                    <div className="skill-card-back">
                        <p>{skill.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Skills;
