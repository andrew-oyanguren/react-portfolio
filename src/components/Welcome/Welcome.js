/* Import JSX Components */
import WelcomeDisplay from './WelcomeDisplay/WelcomeDisplay';

import classes from './Welcome.module.css';

const Welcome = () => {
  return (
    <section className={classes.Welcome}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>I'm Andy, a</h1>
        </div>
        <WelcomeDisplay />
        <div className={classes.location}>
          <p className={classes.from}>Originally from San Diego, CA</p>
          <p className={classes.based}>Based out of Portland, OR</p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;


/*

NOTES: 

1. Do I need wrapping div?
2. Adjust locations

*/