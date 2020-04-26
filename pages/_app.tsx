import App from 'next/app';
import React from 'react';
import CustomThemeProvider from '../providers/CustomThemeProvider';
import 'normalize.css'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CustomThemeProvider>
        <Component {...pageProps} />
      </CustomThemeProvider>
    );
  }
}
