import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  z-index: 1;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1rem;
  color: white;
  padding: 20px 0;
`;

const Title = styled(StyledNavLink)`
  font-size: 2rem;
  padding: 10px 60px 10px 20px;
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

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)',
  },
};

const NavBar: React.FC<Props> = ({ setThemeType, themeType }) => (
  <AppBar>
    <Title to="/">Skiing</Title>
    <StyledNavLink to="/gallery">Gallery</StyledNavLink>
    <Spacer />
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="item"
    >
      <motion.path
        d="m 0 0 c 14 0 17 16 0 20 c 9 -5 8 -16 0 -20"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: 'easeInOut' },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] },
        }}
      />
    </motion.svg>
    <Icon
      src={themeType === 'light' ? moon : sun}
      alt={themeType === 'light' ? 'moon' : 'sun'}
      onClick={() => setThemeType(prev => (prev === 'dark' ? 'light' : 'dark'))}
    />
  </AppBar>
);

export default NavBar;
