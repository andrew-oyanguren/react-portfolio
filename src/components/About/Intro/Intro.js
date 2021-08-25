import classes from './Intro.module.css';

const Intro = () => {
  return ( 
    <div className={classes.Intro}>
      <div className={classes.img} />
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>Hello,</h1>
        </div>
        <div className={classes.text}>
          <p>
            My coding journey starts in January of 2020, where I left a career and small business behind to pursue a path in Front End Development. 
            <br />
            <br />
            I began studying design and my passion eventually led me to mastering the fundamentals in HTML, CSS, and JavaScript. 
            After two years I have expanded my knowledge into ReactJS, and other technologies that I enjoy using. 
            <br />
            <br />
            I am a dreamer, passionate, resilient individual obsessed with self improvement through hard work. 
            I approach each project as an opportunity to bring out the best in myself and celebrate those in others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;