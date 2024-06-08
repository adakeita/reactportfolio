import PropTypes from 'prop-types';
import GitHub from "../../assets/outside-logos/github-black.png";
import GitHubWhite from "../../assets/outside-logos/github-white.png";
import './ProjectCard.css';

const ProjectCard = ({ title, description, screenshotUrl, imageUrl, githubUrl, liveUrl, stack }) => {
    return (
        <article className="project-card-container">
            <div className="styling-wrapper_project-card">
                <div className="img-section_project-card">
                    <figure className="img-wrapper_project-card logo-wrapper_project-card">
                        <img className='logo_project-card' src={imageUrl} alt={`${title} logo`} />
                    </figure>
                    <figure className="img-wrapper_project-card scr-wrapper_project-card">
                        <img className='scr_project-card' src={screenshotUrl} alt={`${title} screenshot`} />
                    </figure>
                </div>
                <div className="info-section_project-card">
                    <div className="tech-wrapper_project-card info-text-wrapper_project-card">
                        <p className="stack_project-card">{stack}</p>
                    </div>
                    <div className="desc-wrapper_project-card info-text-wrapper_project-card">
                        <p className="desc_project-card">{description}</p>
                    </div>
                </div>
            </div>
            <div className="link-wrapper_project-card">
                <div className="links_project-card">
                    <a href={githubUrl} className="project-link" target="_blank" rel="noopener noreferrer" aria-label={`GitHub repository for ${title}`}>
                        <img src={GitHub} alt="GitHub logo black" className="github-logo github-logo-black" />
                        <img src={GitHubWhite} alt="GitHub logo white" className="github-logo github-logo-white" />
                    </a>
                    {liveUrl && (
                        <a href={liveUrl} className="project-link" target="_blank" rel="noopener noreferrer" aria-label={`Live site for ${title}`}>
                            Live Site
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    screenshotUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    githubUrl: PropTypes.string.isRequired,
    liveUrl: PropTypes.string,
    stack: PropTypes.string.isRequired,
};

export default ProjectCard;




