import React from 'react';
import TripCard from './TripCard.jsx';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`

export default ({trips}) => {
  return (
    <ul>
      {trips.map(trip => (
        <ListItem key={trip.uid}>
          <Link to={{pathname: `/trips/${trip.uid}`, state: {trip}}}>
            <TripCard trip={trip} />
          </Link>
        </ListItem>
      ))}
    </ul>
  )
}