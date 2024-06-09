import { skillData, developingSkills } from "../../data/skillData";
import "./Skills.css";

const Skills = () => (
  <div className="component-container_skills ">
    <section className="skill-section_skills">
      <h2>Skills</h2>
      <div className="skills-grid tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-6" role="list">
        {skillData.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div
              className="skill-card-front"
              style={{ backgroundColor: skill.color }}
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="skill-logo"
              />
              <h3>{skill.name}</h3>
            </div>
            <div className="skill-card-back">
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="inprogress-section_skills">
      <h2>Currently Learning</h2>
      <div className="skills-grid tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-6" role="list">
        {developingSkills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-card-front">
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="skill-logo"
              />
              <h3>{skill.name}</h3>
            </div>
            <div className="skill-card-back">
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Skills;
