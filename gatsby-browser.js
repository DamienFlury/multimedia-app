import React from 'react'
import CustomThemeProvider from './src/providers/CustomThemeProvider'

export const wrapRootElement = ({ element }) => {
  return <CustomThemeProvider>{element}</CustomThemeProvider>
}
