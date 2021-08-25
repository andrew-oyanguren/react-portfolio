/* Import JSX Elements */
import Intro from './Intro/Intro';
import Process from './Process/Process';
import Skills from './Skills/Skills';
import RecentBooks from './RecentBooks/RecentBooks';

import classes from './About.module.css';

const About = () => {
  return (
    <div className={classes.About}>
      <Intro />
      <Process />
      <Skills />
      <RecentBooks />
    </div>
  );
};

export default About;