import PortfolioPageWrapper from "./PortfolioPageWrapper/PortfolioPageWrapper";

import classes from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <PortfolioPageWrapper>
      <div className={classes.Portfolio}>
        <div>
          <p>
            Please visit my <a href='https://github.com/andrew-oyanguren' target="_blank" rel="noopener noreferrer">GitHub</a> page
            to view my projects.
          </p>
        </div>
        <strong><span>Under Construction:</span> Coming 08/26</strong>
      </div>
    </PortfolioPageWrapper>
  );
};

export default Portfolio;

/* 

<div className={classes.intro}>
  <div className={classes.heading}>
    <h1>My Projects</h1>
    <p>Here are a few of my most recent works.</p>
  </div>
  <aside>
    <strong>want to see more?</strong>
    <p>
      Visit my <a href='https://github.com/andrew-oyanguren' target="_blank" rel="noopener noreferrer">GitHub</a> page.
    </p>
  </aside>
</div>
<div className={classes.projects}>
  <p>projects</p>
</div>

*/