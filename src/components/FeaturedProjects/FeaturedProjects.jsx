const FeaturedProjects = () => (
    <section className="featured-project">
        <h2 className="feature-header">Featured Projects</h2>
        <div className="featured-class-row">
            <a className="feature-link" href="https://casquareeyes.netlify.app/">
                <div className="feature squareeyes">
                    <div className="squareeyes-logo-wrapper feat-logo-wrapper">
                        <img src="icons/logo-white-blue.png" alt="squareeyes-logo" className="squareeyes-logo featured-logo" />
                    </div>
                    <h3 className="project-title squareeyes-title">SquareEyes</h3>
                    <p className="project-description">A streaming platform for the best independent films.</p>
                </div>
            </a>
            <a className="feature-link" href="https://noroffsoilmates.vercel.app/">
                <div className="feature soilmates">
                    <div className="soilmates-logo-wrapper feat-logo-wrapper">
                        <img src="icons/soilmates-logo2.png" alt="soilmates-logo" className="soilmates-logo featured-logo" />
                    </div>
                    <h3 className="project-title soilmate-title">Soilmates</h3>
                    <p className="project-description">Your one-stop blog for all your houseplant questions.</p>
                </div>
            </a>
            <a className="feature-link" href="https://communitymuseumsa.netlify.app/">
                <div className="feature museum">
                    <div className="museum-logo-wrapper feat-logo-wrapper">
                        <img src="icons/museum.png" alt="museum-logo" className="museum-logo featured-logo" />
                    </div>
                    <h3 className="project-title museum-title">Community Museum</h3>
                    <p className="project-description">A Science-museum catered to our next generation of Steve Irwins and Lovelaces</p>
                </div>
            </a>
        </div>
    </section>
);

export default FeaturedProjects;
