import App from 'next/app';
import React from 'react';
import CustomThemeProvider from '../providers/CustomThemeProvider';
import 'normalize.css';
import '../css/tailwind.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CustomThemeProvider>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </CustomThemeProvider>
    );
  }
}
