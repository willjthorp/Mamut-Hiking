import React from 'react';
import styled, {keyframes} from 'styled-components';
import Icon from 'components/Icon/Icon.jsx'
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
  box-shadow: 0px 0px 7px #dcdcdc;
  border-radius: 10px;
  overflow: hidden;
  animation: ${fadeIn} 200ms ease-in-out;
`

const Img = styled.img`
  width: 100%;
`

const Body = styled.div`
  padding: 0.8rem;
`

const Header = styled.h2`
  font-size: 1.3rem;
  line-height: 1.6rem;
  font-weight: 600;
  color: #4c4c4c;
  margin-bottom: 0.5rem;
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
  background: #00cec9;;
  color: white;
  font-size: 0.9rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;

  ${Icon} {
    color: white;
    margin-right: 0.5rem;
  }
`
const Info = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  background: #fbfbfb;

  div {
    text-align: center;
    flex: 1;
    color: #757575;
    font-size: 0.8rem;

    &:first-child {
      border-right: 1px solid #e0e0e0;
    }
  }
`

export default ({trip}) => (
  <Card>
    <Img src={trip.imgUrl} />
    <Body>
      <Header>
        {trip.title}
      </Header>
      <Description>
        {trip.shortDescription}
      </Description>
    </Body>
    <Info>
      <div>Duration: <strong>{trip.duration}h</strong></div>
      <div>Difficulty: <strong>{trip.difficulty}</strong></div>
    </Info>
    <Footer>
      <Icon className='fas fa-calendar-alt' />
      <span>{moment(trip.timestamp).format('MMMM Do YYYY')}</span>
    </Footer>
  </Card>
)
