import App from 'next/app';
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import CustomThemeProvider from '../providers/CustomThemeProvider';
import '../css/tailwind.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CustomThemeProvider>
        <ParallaxProvider>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </ParallaxProvider>
      </CustomThemeProvider>
    );
  }
}
