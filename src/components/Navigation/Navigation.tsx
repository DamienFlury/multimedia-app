import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import NavBar from './NavBar';
import Drawer from './Drawer';

const Wrapper = styled.div`
  display: flex;
`;

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background.main[0]};
  z-index: 1;
  box-shadow: ${(props) => props.theme.shadows[1]};
  transition: 0.2s;
`;

const Navigation: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <AnimatePresence>{open && <Drawer setOpen={setOpen} />}</AnimatePresence>
      <Main>
        <NavBar setOpen={setOpen} />
        {children}
      </Main>
    </Wrapper>
  );
};

export default Navigation;
