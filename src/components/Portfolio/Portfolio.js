import { Fragment } from 'react';

/* Import JSX Elements */
import PortfolioIntro from './PortfolioIntro/PortfolioIntro';
import PortfolioProjects from './PortfolioProjects/PortfolioProjects';

const Portfolio = () => {
  return (  
    <Fragment>
      <PortfolioIntro />
      <PortfolioProjects />
    </Fragment>  
  );
};

export default Portfolio;