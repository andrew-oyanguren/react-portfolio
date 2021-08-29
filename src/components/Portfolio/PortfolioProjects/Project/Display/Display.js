import classes from './Display.module.css';

const Display = ({tag, image}) => {
  return (
    <div className={classes.Display} style={{backgroundImage: `url(${image})`}}>
      <div className={classes.tag}>
        <strong>{tag}</strong>
      </div>
    </div>
  );
};

export default Display;