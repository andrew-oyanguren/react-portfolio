/* Import JSX Elements */
import PageWrapper from '../components/UI/PageWrapper/PageWrapper';
import Portfolio from '../components/Portfolio/Portfolio';

const PortfolioPage = () => {
  return (
    <section>
      <PageWrapper>
        <Portfolio />
      </PageWrapper>
    </section>
  );
};

export default PortfolioPage;