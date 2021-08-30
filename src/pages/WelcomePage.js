import PageAnimation from '../components/UI/PageAnimation/PageAnimation';

/* Import JSX Components */
import WelcomePageWrapper from '../components/Welcome/WelcomePageWrapper/WelcomePageWrapper';
import Welcome from '../components/Welcome/Welcome';

const WelcomePage = () => {
  return (
    <PageAnimation>
      <WelcomePageWrapper>
        <Welcome />
      </WelcomePageWrapper>
    </PageAnimation>
  );
};

export default WelcomePage;