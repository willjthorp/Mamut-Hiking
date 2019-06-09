import React from 'react';
import styled, {keyframes} from 'styled-components';

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
  box-shadow: 0px 0px 7px #eaeaea;
  border-radius: 10px;
  overflow: hidden;
  animation: ${fadeIn} 200ms ease-in-out;
`

const Img = styled.img`
  width: 100%;
`

const Body = styled.div`
  padding: 1rem;
`

const Header = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
`

export default ({trip}) => (
  <Card>
    <Img src={trip.imgUrl} />
    <Body>
      <Header>
        {trip.title}
      </Header>
    </Body>
  </Card>
)