/* Import Svg's */
import svgDevelopment from '../../../assets/icons/development.svg';
import svgWireframe from '../../../assets/icons/wireframe.svg';
import svgStudy from '../../../assets/icons/study.svg';

/* Import JSX Components */

import ProcessCard from "./ProcessCard/ProcessCard";

import classes from './Process.module.css';

/* Card List Data */

const CARD_DATA = [
  {
    title: 'Design',
    imagePath: svgWireframe,
    description: 'Designing any application starts with fun, creativity, and a thoughtful brainstorming process. I use Figma to transform my wireframes over to a final digital design.'
  },
  {
    title: 'Development',
    imagePath: svgDevelopment,
    description: 'I bring my designs to life using HTML(5), CSS(3), and JavaScript(ES6). I start from scratch using ReactJS, Redux, and other packages to create static single page applications.'
  },
  {
    title: 'Learn To Teach',
    imagePath: svgStudy,
    description: 'I believe you learn best when you approach learning with the mindset to teach others. Continuing to learn new technologies and improve as a developer is key to my success.'
  }
];

const Process = () => {
  return (
    <div className={classes.Process}>
      {CARD_DATA.map((data) => (
        <ProcessCard 
          key={data.title}
          title={data.title}
          image={data.imagePath}
          description={data.description}
        />
      ))}
    </div>
  );
};

export default Process;