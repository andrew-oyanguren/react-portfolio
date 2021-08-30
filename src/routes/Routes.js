import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

/* Lazy Loaded Pages */
const WelcomePage = React.lazy(() => import('../pages/WelcomePage'));
const AboutPage = React.lazy(() => import('../pages/AboutPage'));
const PortfolioPage = React.lazy(() => import('../pages/PortfolioPage'));
const ContactPage = React.lazy(() => import('../pages/ContactPage'));

const Routes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route path='/' exact>
          <Redirect to='/welcome' />
        </Route>

        <Route path='/welcome'>
          <WelcomePage />
        </Route>

        <Route path='/about'>
          <AboutPage />
        </Route>

        <Route path='/portfolio'>
          <PortfolioPage />
        </Route>

        <Route path='/contact'>
          <ContactPage />
        </Route>

        <Route path='*'>
          <Redirect to='/welcome' />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;