import classes from './PortfolioIntro.module.css';

const PortfolioIntro = () => {
  return (
    <div className={classes.PortfolioIntro}>
      <div className={classes.heading}>
        <h1>My Projects</h1>
        <div className={classes.text}>
          <p>Some of my most recent works!</p>
        </div>
      </div>
      <aside>
        <div className={classes.title}>
          <h4>want to see more?</h4>
        </div>
        <div className={classes.link}>
          <p>
            Visit my <a href='https://github.com/andrew-oyanguren' target="_blank" rel="noopener noreferrer">GitHub</a> page.
          </p>
        </div>
      </aside>
    </div>
  );
};

export default PortfolioIntro;