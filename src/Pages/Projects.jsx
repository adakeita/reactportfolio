import ProjectCard from '../components/ProjectCard/ProjectCard';
import projectData from '../data/projectData';
import '../Styles/Projects.css';

const Projects = () => {
	return (
		<div className="page-content content-projectpage">
			<div className="header-wrapper_project-page">
				<h1 className="header_project-page">Projects</h1>
				<p className="ingress_project-page">
					These are some of the projects I have worked on during my studies. You&apos;ll find a small collection of both my personal and Noroff-related web apps. I hope you&apos;ll see something you like!
				</p>
			</div>
			<section className="noroff-wrapper_project-page">
				<h2 className="section-header_projectpage">Noroff Projects</h2>
				<div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6" role="list">
					{projectData.map((project, index) => (
						<ProjectCard
							key={index}
							title={project.title}
							description={project.description}
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
			</section>
		</div>
	);
};

export default Projects;



