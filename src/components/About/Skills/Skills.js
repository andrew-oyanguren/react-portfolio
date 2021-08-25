/* Import JSX Elements */
import SkillsTable from "./SkillsTable/SkillsTable";

import classes from './Skills.module.css';

const Skills = () => {
  return (
    <section className={classes.Skills}>
        <div className={classes.passion}>
          <div className={classes.container}>
            <div className={classes.text}>
              <div className={classes.title}>
                <h3>Currently,</h3>
              </div>
              <p>
                My focus is on the front end of development, but I also have a great deal of interest in data managment, 
                and for that reason, as I continue to expand my knowledge, my learning path includes back-end development.
                <br />
                <br />
                Some additional skills include, Redux, unit testing, animations, and hooks. 
                <br />
                <br />
                I have a unique professional background, one being in construction, 
                and the other in creative arts, as a musician/singer-song writer. My patients and ability to learn has propelled me in my coding journey.
              </p>
            </div>
            <div className={classes.table}>
              <SkillsTable />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Skills;