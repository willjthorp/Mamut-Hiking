import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon.jsx'

const Button = styled.button`
  background: #ff7070;
  border-radius: 8px;
  box-sizing: border-box;
  color: white;
  height: 2rem;
  letter-spacing: 1px;
  margin: 0 auto;
  padding: 2px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  font-size: 0.75rem;

  &:hover {
    border-radius: none;
  }

  ${Icon} {
    color: white;
    margin-right: 0.5rem;
  }
`

export default ({children, icon}) => (
  <Button>
    {icon && <Icon className={`fas fa-${icon}`} />}
    {children}
  </Button>
)
