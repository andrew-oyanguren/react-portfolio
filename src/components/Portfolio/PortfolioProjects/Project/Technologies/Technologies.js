import classes from './Technologies.module.css';

const Technologies = ({technologies}) => {

  return (
    <div className={classes.Technologies}>
      <div className={classes.heading}>
        <h4>Technologies Used</h4>
      </div>
      <ul className={classes.list}>
        {technologies.map((item, idx) => (
          <li key={idx}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Technologies;