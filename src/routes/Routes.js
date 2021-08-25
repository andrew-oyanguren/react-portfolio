import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

/* Lazy Loaded Pages */
const WelcomePage = React.lazy(() => import('../pages/WelcomePage'));
const AboutPage = React.lazy(() => import('../pages/AboutPage'));
const PortfolioPage = React.lazy(() => import('../pages/PortfolioPage'));
const ContactPage = React.lazy(() => import('../pages/ContactPage'));

const Routes = () => {
  return (
    <Switch>
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
  );
};

export default Routes;