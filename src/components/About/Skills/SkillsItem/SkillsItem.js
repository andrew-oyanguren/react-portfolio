import classes from './SkillsItem.module.css';

const SkillsItem = ({skill, icon}) => {
  return (
    <div className={classes.SkillsItem}>
      <div className={classes.icon}>
        {icon}
      </div>
      <div className={classes.skill}>
        <p>{skill}</p>
      </div>
    </div>
  );
};

export default SkillsItem;