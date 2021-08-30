import PageAnimation from '../components/UI/PageAnimation/PageAnimation';

/* Import JSX Components */
import ContactPageWrapper from '../components/Contact/ContactPageWrapper/ContactPageWrapper';
import Contact from '../components/Contact/Contact';

const ContactPage = () => {
  return (
    <PageAnimation> 
      <ContactPageWrapper>
        <Contact />
      </ContactPageWrapper>
    </PageAnimation>
  );
};

export default ContactPage;