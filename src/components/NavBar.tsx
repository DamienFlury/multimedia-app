import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import moon from '../moon.svg';
import sun from '../sun.svg';
import { ThemeType } from '../App';

const AppBar = styled.nav`
  background: ${props => props.theme.colors.primary[0]};
  box-shadow: ${props => props.theme.shadows[0]};
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.5rem;
  color: white;
`;

const Title = styled(StyledNavLink)`
  font-size: 3rem;
  padding: 20px 60px 20px 20px;
`;

const Spacer = styled.span`
  flex: 1;
`;

const Icon = styled.img`
  height: 40px;
`;

type Props = {
  setThemeType: React.Dispatch<React.SetStateAction<ThemeType>>;
  themeType: ThemeType;
};

const NavBar: React.FC<Props> = ({ setThemeType, themeType }) => (
  <AppBar>
    <Title to="/">Skiing</Title>
    <StyledNavLink to="/gallery">Gallery</StyledNavLink>
    <Spacer />
    <Icon
      src={themeType === 'light' ? moon : sun}
      alt={themeType === 'light' ? 'moon' : 'sun'}
      onClick={() => setThemeType(prev => (prev === 'dark' ? 'light' : 'dark'))}
    />
  </AppBar>
);

export default NavBar;
