/* Import Project Images */
import authenticationImage from '../../../assets/img/authentication.png';
import foodOrderImage from '../../../assets/img/food-order.png';
import memoryGameImage from '../../../assets/img/memory-game.jpeg';
import self from '../../../assets/img/self.jpeg';


/* Import JSX Elements */
import Project from './Project/Project';

import classes from './PortfolioProjects.module.css';

const PortfolioProjects = () => {
  return (
    <div className={classes.PortfolioProjects}>
      <Project 
        title='Food Order App'
        image={foodOrderImage}
        tag='Firebase'
        description='Uses all of the core fundamentals of React to create a food order App. Including hooks such as useState, useEffect, useContext, useRef. Incorporates Firebase storage to store items, and uses localstorage to save cart on re-load. '
        url='https://food-order-app-130de.firebaseapp.com/'
        technologies={['HTML5 (JSX)', 'CSS3 (Modules)', 'JavaScript ES6 (React)', 'Firebase (Database)']}
      />
      <Project 
        title='Authentication'
        image={authenticationImage}
        tag='~GitHub'
        description='Focuses on authentication practices using context to manage login state. Includes secure routes, validation, handling security tokens, and checking for token expiration for auto login/logout, as well as fething data from Firebase.'
        url='https://github.com/andrew-oyanguren/react-authentication-project'
        technologies={['HTML5 (JSX)', 'CSS3 (Modules)', 'JavaScript ES6 (React)', 'Firebase (Authentication)']}
      />
      <Project 
        title='React Portfolio'
        image={self}
        tag='~GitHub'
        description='My third and current portfolio website. Showcases my control of React using custom hooks, context (for cross-component states), dynamically rendering list elements, dynamically render css, as well as creating a reponsive layout from scratch.'
        url='https://github.com/andrew-oyanguren/react-portfolio'
        technologies={['HTML5 (JSX)', 'CSS3 (Modules)', 'JavaScript ES6 (React)', 'React Router', 'Framer Motion']}
      />
      <Project 
        title='Memory Game'
        image={memoryGameImage}
        tag='~GitHub'
        description='Focuses on manipulating the DOM, looping through arrays, using new methods, and improving my problem solving abilities with JS. I have a toddler who benefited from this memory game, and he loves it! Hashtag proud daddy here.'
        url='https://github.com/andrew-oyanguren/memory-game'
        technologies={['HTML5', 'CSS3 (Sass)', 'JavaScript ES6']}
      />
    </div>
  );
};

export default PortfolioProjects;