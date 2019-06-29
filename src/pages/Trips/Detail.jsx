import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon'
import moment from 'moment';
import Button from 'components/Button/Button';
import ScrollToTop from 'components/ScrollToTop';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-bottom: 20px;
`

const Container = styled.div`
  padding: 1rem;

  ${Icon} {
    font-size: 1.5rem;
  }
`

const Description = styled.p`
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: #585858;
`

const Img = styled.img`
  width: 100%;
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

const Header = styled.h2`
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 600;
  color: #4c4c4c;
  font-family: 'Fresca', sans-serif;
  text-transform: uppercase;
  padding: 1rem;
  background: #ececec;
`

const ButtonBar = styled.div`
  position: fixed;
  background: white;
  width: 100%;
  bottom: 50px;
  display: flex;
  align-items: center;
  padding: 0rem 1rem;
  height: 45px;
  box-shadow: 0px 1px 7px 0px rgba(72,72,72,0.1), 0 0 0 1px rgba(220,220,220,0.1);

  button {
    width: 45%;
  }
`

class DetailPage extends React.Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    const {trip} = this.props.location.state;

    return (
      <ScrollToTop>
        <Container>
          <Link to={ROUTES.TRIPS_UPCOMING}>
            <Icon className='fas fa-chevron-left' />
          </Link>
        </Container>
        <PageContainer>
          <Img src={trip.imgUrl} />
          <Header>{trip.title}</Header>
          <Footer>
          <Icon className='fas fa-calendar-alt' />
            <span>
              {moment.unix(trip.startDate.seconds).format('MMMM Do') + (trip.endDate ? ` - ${moment.unix(trip.endDate.seconds).format('Do')}` : '')}
            </span>
          </Footer>
          <Container>
            <Description>
              {trip.description}
            </Description>
          </Container>
        </PageContainer>

        <ButtonBar>
          <Button icon='envelope'>Question?</Button>
          <Button icon='check-circle'>Sign Up!</Button>
        </ButtonBar>
      </ScrollToTop>
    )
  }
}

export default DetailPage;
