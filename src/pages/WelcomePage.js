/* Import JSX Components */
import WelcomePageWrapper from '../components/Welcome/WelcomePageWrapper/WelcomePageWrapper';
import Welcome from '../components/Welcome/Welcome';

const WelcomePage = () => {
  return (
    <section>
      <WelcomePageWrapper>
        <Welcome />
      </WelcomePageWrapper>
    </section>
  );
};

export default WelcomePage;