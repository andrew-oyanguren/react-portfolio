import SkillsItem from '../SkillsItem/SkillsItem';

/* Import Icons */
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiSass } from 'react-icons/si';
import { ImDatabase } from 'react-icons/im';
import { SiJest } from 'react-icons/si';

import classes from './SkillsTable.module.css';

const TECHNOLOGIES = [
  {
    technology: 'HTML5',
    icon: <SiHtml5 />,
  },
  {
    technology: 'CSS3',
    icon: <SiCss3 />,
  },
  {
    technology: 'JavaScript ES6',
    icon: <SiJavascript />,
  },
  {
    technology: 'Bootstrap 4',
    icon: <SiBootstrap />,
  },
  {
    technology: 'ReactJS',
    icon: <SiReact />,
  },
  {
    technology: 'SaSS',
    icon: <SiSass />,
  },
  {
    technology: 'REST',
    icon: <ImDatabase />,
  },
  {
    technology: 'Unit Tests',
    icon: <SiJest />,
  },
];

const SkillsTable = () => {
  return (
    <div className={classes.SkillsTable}>
      {TECHNOLOGIES.map((item) => (
        <SkillsItem 
          key={item.technology} 
          skill={item.technology} 
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default SkillsTable;