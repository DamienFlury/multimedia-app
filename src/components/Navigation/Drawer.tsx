import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import Typography from '../../styled-components/Typography';

const NavLinkWrapper = styled.div`
  padding: 0 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
`;

const NavLinkTitle = styled.span`
  margin-left: 10px;
`;

const StyledNavLink = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary[0]};
  display: flex;
`;

type CustomNavLinkProps = {
  icon?: string;
  to: string;
  onClick: () => void;
};

const CustomNavLink: React.FC<CustomNavLinkProps> = ({
  children,
  icon,
  to,
  onClick,
}) => (
  <NavLinkWrapper>
    <StyledNavLink as={NavLink} to={to} onClick={onClick}>
      <i className="material-icons">{icon}</i>
      <NavLinkTitle>{children}</NavLinkTitle>
    </StyledNavLink>
  </NavLinkWrapper>
);

const Wrapper = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.background.inverse[0]};
  height: 100vh;
  color: white;
  overflow: hidden;
  position: sticky;
  top: 0;
`;

type DrawerProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Drawer: React.FC<DrawerProps> = ({ setOpen }) => (
  <Wrapper
    animate={{ width: '400px' }}
    style={{ width: 0 }}
    exit={{ width: 0 }}
  >
    <CustomNavLink icon="home" onClick={() => setOpen(false)} to="/">
      Home
    </CustomNavLink>
    <CustomNavLink
      icon="photo_library"
      onClick={() => setOpen(false)}
      to="/gallery"
    >
      Gallery
    </CustomNavLink>
    <CustomNavLink
      to="/technologies"
      onClick={() => setOpen(false)}
      icon="code"
    >
      Technologies
    </CustomNavLink>
    <CustomNavLink to="/about" onClick={() => setOpen(false)} icon="info">
      About
    </CustomNavLink>
  </Wrapper>
);

export default Drawer;
