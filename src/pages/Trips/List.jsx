import React from 'react';
import { withFirebase } from 'components/Firebase';
import PageHeader from 'components/PageHeader/PageHeader.jsx'
import styled from 'styled-components';
import { NavLink, Switch, Route } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import TripsList from 'components/Trips/TripsList.jsx'
import moment from 'moment';
const activeClassName = 'sub-nav-item-active'

const Container = styled.div`
  padding: 1rem;
`

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
  margin-bottom: 0.8rem;
`

class TripListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { upcomingTrips: [], pastTrips: [] };
  }

  componentDidMount() {
    this.setState({ loading: true });
    const upcomingTrips = [];
    const pastTrips = [];

    this.unsubscribe = this.props.firebase.trips()
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
          const array = moment().isAfter(moment.unix(doc.data().startDate.seconds)) ? pastTrips : upcomingTrips;

          array.push({
            uid: doc.id,
            ...doc.data(),
          });
        })

        this.setState({upcomingTrips, pastTrips, loading: false });
      });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const {upcomingTrips, pastTrips} = this.state;

    console.log({upcomingTrips})
    return (
      <Container>
        <PageHeader>Trips</PageHeader>

        <nav>
          <SubNavList>
            <SubNavItem>
              <StyledNavLink exact to={ROUTES.TRIPS_UPCOMING}>
                UPCOMING {upcomingTrips.length ? `(${upcomingTrips.length})` : ''}
              </StyledNavLink>
            </SubNavItem>
            <SubNavItem>
              <StyledNavLink exact to={ROUTES.TRIPS_PAST}>
                PAST {pastTrips.length ? `(${pastTrips.length})` : ''}
              </StyledNavLink>
            </SubNavItem>
          </SubNavList>
        </nav>

        <Switch>
          <Route exact path={ROUTES.TRIPS_UPCOMING} render={props => <TripsList {...props} trips={upcomingTrips} />} />
          <Route exact path={ROUTES.TRIPS_PAST} render={props => <TripsList {...props} trips={pastTrips} />} />
        </Switch>
      </Container>
    )
  }
}

export default withFirebase(TripListPage);
