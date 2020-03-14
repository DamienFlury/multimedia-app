/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import Header from './header'
import './layout.css'
import Typography from '../styled-components/Typography'

const Drawer = styled(motion.div)`
  background-color: #121212;
  height: 100vh;
  color: white;
  overflow: hidden;
  box-shadow: 0 5px 5px black inset;
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
              <NavLink as={Link} to="/gallery" onClick={() => setOpen(false)}>
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
        <Header siteTitle={data.site.siteMetadata.title} setOpen={setOpen} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
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
  )
}

export default Layout
