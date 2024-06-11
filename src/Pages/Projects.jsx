import ProjectCard from '../components/ProjectCard/ProjectCard';
import projectData from '../data/projectData';
import personalProjectData from '../data/personalProjectData';
import '../Styles/Projects.css';

const Projects = () => {
  return (
    <div className="page-content content-projectpage">
      <div className="header-wrapper_project-page">
        <h1 className="header_project-page">Projects</h1>
        <p className="ingress_project-page">
          These are some of the projects I have worked on during my studies. You&apos;ll find a small collection of one personal and some Noroff-related web apps/pages. I hope you&apos;ll see something you like
        </p>
      </div>
      <section className="noroff-wrapper_project-page">
        <h2 className="section-header_projectpage">Noroff Projects</h2>
        <div className="projectcard-wrapper_projects" role="list">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              id={`project-${project.id}`}
              title={project.title}
              year={project.year}
              description={project.description}
              longDescription={project.longDescription}
              screenshotUrl={project.screenshotUrl}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              stack={project.stack}
              role="listitem"
            />
          ))}
        </div>
      </section>
      <section className="other-wrapper_projects-page">
        <h2 className="section-header_projectpage">Passion Project</h2>
        <div className="projectcard-wrapper_projects" role="list">
          {personalProjectData.map((project, index) => (
            <ProjectCard
              key={index}
              id={`project-${project.id}`}
              title={project.title}
              year='2023-now'
              description={project.description}
              screenshotUrl={project.screenshotUrl}
              longDescription={project.longDescription}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              stack={project.stack}
              role="listitem"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
