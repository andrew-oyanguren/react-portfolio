/* Import Custom Hook */
import useBreakpoint from '../../../../hooks/use-breakpoint';

/* Import JSX Elements */
import Technologies from './Technologies/Technologies';
import Display from './Display/Display';
import Info from './Info/Info';

import classes from './Project.module.css';

/* Navbar breakpoint passed to custom hook */
const breakpoint = 1080;

const Project = ({title, image, description, url, technologies, tag}) => {

  const {customBreakpoint} = useBreakpoint(breakpoint);

  return (
    <div className={classes.Project}>
      <div className={classes.container}>
        {customBreakpoint && 
          <Technologies 
            technologies={technologies}
          />
        }
        <Display 
          tag={tag}
          image={image}
        />
        <Info 
          title={title}
          description={description}
          url={url}
        />
      </div>
    </div>
  );
};

export default Project;