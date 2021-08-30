import PageAnimation from '../components/UI/PageAnimation/PageAnimation';

/* Import JSX Components */
import AboutPageWrapper from '../components/About/AboutPageWrapper/AboutPageWrapper';
import About from '../components/About/About';

const AboutPage = () => {
  return (
    <PageAnimation>
      <AboutPageWrapper>
        <About />
      </AboutPageWrapper>
    </PageAnimation>
  );
};

export default AboutPage;