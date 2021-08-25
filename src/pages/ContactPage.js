/* Import JSX Components */
import ContactPageWrapper from '../components/UI/PageWrapper/PageWrapper';
import Contact from '../components/Contact/Contact';

const ContactPage = () => {
  return (
    <section>
      <ContactPageWrapper>
        <Contact />
      </ContactPageWrapper>
    </section>
  );
};

export default ContactPage;