import React from 'react';
import styled, {keyframes} from 'styled-components';
import Icon from 'components/Icon/Icon'
import Button from 'components/Button/Button';
import moment from 'moment';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const Card = styled.div`
  box-shadow: 0px 0px 8px #c3c3c3;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  animation: ${fadeIn} 200ms ease-in-out;
`

const Img = styled.img`
  width: 100%;
  max-height: 10rem;
  object-fit: cover;
`

const Container = styled.div`
  padding: 0.8rem;
`

const Header = styled.h2`
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 600;
  color: #4c4c4c;
  margin-bottom: 0.8rem;
  font-family: 'Fresca', sans-serif;
  text-transform: uppercase;
`

const Description = styled.p`
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: #585858;
`

const Footer = styled.div`
  font-size: 0.8rem;
  line-height: 1.2rem;
  padding: 0.35rem;
  color: #545454;
  font-size: 0.9rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;

  ${Icon} {
    color: #545454;
    margin-right: 0.5rem;
  }
`
const Info = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  background: #f7f7f7;

  div {
    text-align: center;
    flex: 1;
    color: #757575;
    font-size: 0.8rem;

    &:not(:last-child) {
      border-right: 1px solid #e0e0e0;
    }
  }
`

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  background: #f7f7f7;

  & > :not(:last-child) {
    margin-bottom: 0.2rem;
  }

  & ${Icon} {
    margin-bottom: 0.4rem;
    font-size: 1.1rem;
  }
`

export default ({trip}) => (
  <Card>
    <Img src={trip.imgUrl} />
    <Container>
      <Header>
        {trip.title}
      </Header>
      <Description>
        {trip.shortDescription}
      </Description>
    </Container>
    <Info>
      <InfoItem>
        <Icon className='fas fa-calendar-alt' />
        <span>Date:</span>
        <strong>{moment.unix(trip.startDate.seconds).format('MMMM Do')}</strong>
      </InfoItem>
      <InfoItem>
        <Icon className='fas fa-users' />
        <span>Spaces:</span>
        <strong>6</strong>
      </InfoItem>
      <InfoItem>
        <Icon className='fas fa-coins' />
        <span>Price:</span>
        <strong>£30</strong>
      </InfoItem>
    </Info>
    <Container>
      <Button>
        More Info + Sign Up
      </Button>
    </Container>
  </Card>
)
