import PageAnimation from '../components/UI/PageAnimation/PageAnimation';

/* Import JSX Elements */
import PortfolioPageWrapper from '../components/Portfolio/PortfolioPageWrapper/PortfolioPageWrapper';
import Portfolio from '../components/Portfolio/Portfolio';

const PortfolioPage = () => {
  return (
    <PageAnimation>
      <PortfolioPageWrapper>
        <Portfolio />
      </PortfolioPageWrapper>
    </PageAnimation>
  );
};

export default PortfolioPage;