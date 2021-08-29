/* Import JSX Elements */
import PortfolioPageWrapper from '../components/Portfolio/PortfolioPageWrapper/PortfolioPageWrapper';
import Portfolio from '../components/Portfolio/Portfolio';

const PortfolioPage = () => {
  return (
    <section>
      <PortfolioPageWrapper>
        <Portfolio />
      </PortfolioPageWrapper>
    </section>
  );
};

export default PortfolioPage;