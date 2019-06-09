import React from 'react';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import Icon from '../Icon/Icon.jsx'
import {Nav, NavList, NavItem, NavLogo, StyledNavLink} from './styles';

const Navigation = ({authUser}) => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <StyledNavLink to={ROUTES.TRIPS}>
            <Icon className='fas fa-hiking' />
            TRIPS
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to={ROUTES.GALLERY}>
            <Icon className='fas fa-camera' />
            GALLERY
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to={ROUTES.HOME}>
            <NavLogo>Mamut Hiking</NavLogo>
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to={ROUTES.BLOG}>
            <Icon className='fas fa-pencil-alt' />
            BLOG
          </StyledNavLink>
        </NavItem>
        <AuthUserContext.Consumer>
          {authUser => authUser ? (
            <NavItem>
              <StyledNavLink to={ROUTES.ACCOUNT}>
                <Icon className='fas fa-user' />
                ACCOUNT
              </StyledNavLink>
            </NavItem>
          ) : (
            <NavItem>
              <StyledNavLink to={ROUTES.SIGN_IN}>
                <Icon className='fas fa-user' />
                SIGN IN
              </StyledNavLink>
            </NavItem>
          )}
        </AuthUserContext.Consumer>
      </NavList>
    </Nav>
  )
};

export default Navigation;
