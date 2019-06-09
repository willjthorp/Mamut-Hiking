import React from 'react';
import TripCard from './TripCard.jsx';
import { withFirebase } from '../Firebase';

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

    this.props.firebase.trips().where('startDate', '>', new Date()).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log({doc})
        trips.push({
          uid: doc.id,
          ...doc.data(),
        });
      })

      this.setState({ trips, loading: false });
    });
  }

  render() {
    const { trips } = this.state;
    console.log('RENDER: ', {trips})

    return (
      <ul>
        {trips.map(trip => (
          <li key={trip.uid}>
            <TripCard trip={trip} />
          </li>
        ))}
      </ul>
    )
  }
}

export default withFirebase(TripsListBase);