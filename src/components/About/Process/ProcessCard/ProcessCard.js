import classes from './ProcessCard.module.css';

const ProcessCard = ({title, description, image}) => {
  return (
    <div className={classes.ProcessCard} style={{backgroundImage: `url(${image})`}}>
      <h4 className={classes.title}>
        {title}
      </h4>
      <div className={classes.body}>
        <div className={classes.text}>
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;