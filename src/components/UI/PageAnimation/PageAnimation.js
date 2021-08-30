import {motion} from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
  }
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.65
}

const PageAnimation = (props) => {
  return (
    <motion.section
      initial='initial'
      animate='visible'
      exit='initial'
      variants={pageVariants}
      transition={pageTransition}
    >
      {props.children}
    </motion.section>
  );
};

export default PageAnimation;