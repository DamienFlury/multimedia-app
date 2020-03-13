import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  borderRadius: '4px',
  colors: {
    primary: ['#007bff'],
    secondary: [''],
  },
}

export const wrapRootElement = ({ element }) => {
  console.log('Browser js')
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
