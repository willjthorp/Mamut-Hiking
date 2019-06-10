import React from 'react';
import TripCard from './TripCard.jsx';
import { withFirebase } from '../Firebase';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

class TripsListBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      trips: [],
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    const trips = [];

    this.unsubscribe = this.props.firebase.trips()
      .where('startDate', '>', new Date())
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
          trips.push({
            uid: doc.id,
            ...doc.data(),
          });
        })

        this.setState({ trips, loading: false });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { trips } = this.state;

    return (
      <ul>
        {trips.map(trip => (
          <li key={trip.uid}>
            <Link to={{pathname: `/trips/${trip.uid}`, state: {trip}}}>
              <TripCard trip={trip} />
            </Link>
          </li>
        ))}
      </ul>
    )
  }
}

export default withFirebase(TripsListBase);
