import classes from './Socials.module.css';

/* Import JSX Elements */
import SocialListItems from './SocialListItems/SocialListItems';

const Socials = () => {
  return (
    <aside className={classes.Socials}>
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <h3>Let's Connect</h3>
        </div>
        <ul>
          <SocialListItems />
        </ul>
      </div>
    </aside>
  );
};

export default Socials;