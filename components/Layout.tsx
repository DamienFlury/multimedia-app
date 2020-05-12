import React from 'react';
import Head from 'next/head';
import NavBar from './NavBar';

type Props = {
  title: string;
};

const Layout: React.FC<Props> = ({ title, children }) => (
  <div className="min-h-screen w-full bg-gray-100 shadow flex flex-col text-gray-800">
    <Head>
      <title>Multimedia App | {title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <NavBar title={'Multimedia App'} setOpen={() => {}} />
    <main>{children}</main>
  </div>
);

export default Layout;
