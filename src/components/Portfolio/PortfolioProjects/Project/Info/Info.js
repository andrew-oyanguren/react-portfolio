import classes from './Info.module.css';

const Info = ({title, description, url}) => {
  return (
    <div className={classes.Info}>
      <div className={classes.title}>
        <h4>{title}</h4>
      </div>
      <div className={classes.description}>
        <p>
          {description}
        </p>
      </div>
      <a className={classes.link} 
        href={url}
        target='_blank' 
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  );
};

export default Info;