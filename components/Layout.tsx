import React from 'react';
import Head from 'next/head';
import NavBar from './NavBar';
import styled from 'styled-components';


const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background.main[0]};
  z-index: 1;
  box-shadow: ${(props) => props.theme.shadows[1]};
  transition: 0.2s;
`;

type Props = {
  title: string;
};

const Layout: React.FC<Props> = ({ title, children }) => (
  <Wrapper>
    <Head>
      <title>Multimedia App | {title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
    </Head>
    <NavBar title={"Multimedia App"} setOpen={() => {}} />
    <main>{children}</main>
  </Wrapper>
);

export default Layout;
