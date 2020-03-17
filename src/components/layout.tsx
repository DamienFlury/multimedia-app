/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled, { DefaultTheme, ThemeProvider } from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import Header from './header'
import './layout.css'
import Typography from '../styled-components/Typography'
import { ParallaxProvider } from 'react-scroll-parallax'

const theme: DefaultTheme = {
  borderRadius: '4px',
  colors: {
    primary: ['#007bff'],
    secondary: [''],
    background: {
      main: ['#232323'],
      inverse: ['#ffffff'],
    },
    foreground: '#ffffff',
  },
  shadows: ['0 2px 3px rgba(0, 0, 0, 0.5)', '0 5px 15px rgba(0, 0, 0, 0.3)'],
}

const Drawer = styled(motion.div)`
  background-color: ${props => props.theme.colors.background.inverse[0]};
  height: 100vh;
  color: white;
  overflow: hidden;
  position: sticky;
  top: 0;
`

const NavLink = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-decoration: none;
  color: ${props => props.theme.colors.primary[0]};
`
const NavLinkWrapper = styled.div`
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  width: 100%;
`

const Wrapper = styled.div`
  display: flex;
`

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.colors.background.main[0]};
  z-index: 1;
  box-shadow: ${props => props.theme.shadows[1]};
`

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [open, setOpen] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <Wrapper>
          <AnimatePresence>
            {open && (
              <Drawer
                animate={{ width: '400px' }}
                style={{ width: 0 }}
                exit={{ width: 0 }}
              >
                <NavLinkWrapper>
                  <NavLink as={Link} to="/" onClick={() => setOpen(false)}>
                    Home
                  </NavLink>
                </NavLinkWrapper>
                <NavLinkWrapper>
                  <NavLink
                    as={Link}
                    to="/gallery"
                    onClick={() => setOpen(false)}
                  >
                    Gallery
                  </NavLink>
                </NavLinkWrapper>
                <NavLinkWrapper>
                  <NavLink as={Link} to="/about" onClick={() => setOpen(false)}>
                    About
                  </NavLink>
                </NavLinkWrapper>
              </Drawer>
            )}
          </AnimatePresence>
          <Main>
            <Header
              siteTitle={data.site.siteMetadata.title}
              setOpen={setOpen}
            />
            <div
              style={{
                margin: `0 auto`,
                padding: `0 1.0875rem 1.45rem`,
              }}
            >
              <main>{children}</main>
              <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>
            </div>
          </Main>
        </Wrapper>
      </ParallaxProvider>
    </ThemeProvider>
  )
}

export default Layout
