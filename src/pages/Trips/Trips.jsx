import React from 'react';
import PageHeader from 'components/PageHeader/PageHeader.jsx'
import styled from 'styled-components';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import UpcomingPage from './Upcoming.jsx';
import PastPage from './Past.jsx';
const activeClassName = 'sub-nav-item-active'

export const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  height: 100%;
  position: relative;
  color: #ababab;
  padding: 0.4rem 0.2rem;
  padding-bottom: 0.4rem;
  margin-right: 1rem;
  font-size: 0.8rem;

  &.${activeClassName} {
    color: #00cec9;

    :after {
      content: '';
      position: absolute;
      bottom: -1px;
      height: 2px;
      background: #00cec9;
      left: 0;
      right: 0;
      z-index: 1;
    }
  }
`

const SubNavItem = styled.li`
  display: flex;
`

const SubNavList = styled.ul`
  display: flex;
  border-bottom: 1px solid #dadada;
  margin-bottom: 1.5rem;
`

export default () => (
  <div>
    <Redirect to="/trips/upcoming" />

    <PageHeader>Trips</PageHeader>
    <nav>
      <SubNavList>
        <SubNavItem>
          <StyledNavLink exact to={ROUTES.TRIPS_UPCOMING}>
            UPCOMING
          </StyledNavLink>
        </SubNavItem>
        <SubNavItem>
          <StyledNavLink exact to={ROUTES.TRIPS_PAST}>
            PAST
          </StyledNavLink>
        </SubNavItem>
      </SubNavList>
    </nav>

    <Switch>
      <Route exact path={ROUTES.TRIPS_UPCOMING} component={UpcomingPage} />
      <Route exact path={ROUTES.TRIPS_PAST} component={PastPage} />
    </Switch>
  </div>
)
