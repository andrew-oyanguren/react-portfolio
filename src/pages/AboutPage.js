/* Import JSX Components */
import AboutPageWrapper from '../components/About/AboutPageWrapper/AboutPageWrapper';
import About from '../components/About/About';

const AboutPage = () => {
  return (
    <section>
      <AboutPageWrapper>
        <About />
      </AboutPageWrapper>
    </section>
  );
};

export default AboutPage;