import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import LandingPage from '../components/Landing';
import SignUpPage from '../components/SignUp';
import SignInPage from '../components/SignIn';
import PasswordForgetPage from '../components/PasswordForget';
import HomePage from '../components/Home';
import AccountPage from '../components/Account';
import AdminPage from '../components/Admin';
import TripsPage from './Trips/Trips.jsx';
import * as ROUTES from '../constants/routes';
import {withAuthentication} from '../components/Session';
import styled from 'styled-components';

const AppContainer = styled.main`
  padding: 1rem;
`

const App = () => (
  <Router>
    <Navigation />

    <AppContainer>
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.TRIPS} component={TripsPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </AppContainer>
  </Router>
);

export default withAuthentication(App);