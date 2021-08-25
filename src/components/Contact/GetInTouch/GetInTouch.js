/* Import JSX Components */
import Network from './Network/Network';

import classes from './GetInTouch.module.css';

const GetInTouch = () => {
  return (
    <section className={classes.GetInTouch}>
      <h1>Get In Touch</h1>
      <Network />
      <hr />
      <div className={classes.quote}>
        <div className={classes.text}>
          <p>
            The secret of getting ahead is getting started
          </p>
        </div>
        <div className={classes.author}>
          <p>- Mark Twain</p>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;