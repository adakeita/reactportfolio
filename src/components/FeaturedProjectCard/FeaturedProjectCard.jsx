import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./FeaturedProjectCard.css";

const FeaturedProjectCard = ({
  id,
  title,
  description,
  screenshotUrl,
  imageUrl,
}) => {
  return (
    <article className="project-card-container_featured">
      <a
        href={`/projects#project-${id}`}
        className="card-link_featured-project-card"
      >
        <div className="styling-wrapper_project-card_featured">
          <div className="img-section_featured-project-card">
            <figure className="img-wrapper_featured-project-card logo-wrapper_featured-project-card">
              <img
                className="logo_featured-project-card"
                src={imageUrl}
                alt={`${title} logo`}
              />
            </figure>
            <figure className="img-wrapper_featured-project-card scr-wrapper_featured-project-card">
              <img
                className="scr_featured-project-card"
                src={screenshotUrl}
                alt={`${title} screenshot`}
              />
            </figure>
          </div>
          <div className="info-section_featured-projectcard">
            <div className="title-wrapper_featured-projectcard">
              <h1 className="title_featured-projectcard">{title}</h1>
            </div>
            <div className="desc-wrapper_featured-projectcard">
              <p className="desc_featured-projectcard">{description}</p>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

FeaturedProjectCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  screenshotUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default FeaturedProjectCard;
