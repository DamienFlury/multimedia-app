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
import { ParallaxProvider } from 'react-scroll-parallax'

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
  display: flex;
`

const NavLinkTitle = styled.span`
  margin-left: 10px;
`
const NavLinkWrapper = styled.div`
  padding: 0 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
`

type CustomNavLinkProps = {
  icon?: string
  to: string
  onClick: () => void
}
const CustomNavLink: React.FC<CustomNavLinkProps> = ({
  children,
  icon,
  to,
  onClick,
}) => (
  <NavLinkWrapper>
    <NavLink as={Link} to={to} onClick={onClick}>
      <i className="material-icons">{icon}</i>
      <NavLinkTitle>{children}</NavLinkTitle>
    </NavLink>
  </NavLinkWrapper>
)

const Wrapper = styled.div`
  display: flex;
`

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.colors.background.main[0]};
  z-index: 1;
  box-shadow: ${props => props.theme.shadows[1]};
  transition: 0.2s;
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
    <ParallaxProvider>
      <Wrapper>
        <AnimatePresence>
          {open && (
            <Drawer
              animate={{ width: '400px' }}
              style={{ width: 0 }}
              exit={{ width: 0 }}
            >
              <CustomNavLink icon="home" onClick={() => setOpen(false)} to="/">
                Home
              </CustomNavLink>
              <CustomNavLink
                icon="photo_library"
                onClick={() => setOpen(false)}
                to="/gallery"
              >
                Gallery
              </CustomNavLink>
              <CustomNavLink
                to="/technologies"
                onClick={() => setOpen(false)}
                icon="code"
              >
                Technologies
              </CustomNavLink>
              <CustomNavLink
                to="/about"
                onClick={() => setOpen(false)}
                icon="info"
              >
                About
              </CustomNavLink>
            </Drawer>
          )}
        </AnimatePresence>
        <Main>
          <Header siteTitle={data.site.siteMetadata.title} setOpen={setOpen} />
          <div
            style={{
              margin: `0 auto`,
              padding: `0 1.0875rem 1.45rem`,
            }}
          >
            <main>{children}</main>
            <footer>
              <Typography>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </Typography>
            </footer>
          </div>
        </Main>
      </Wrapper>
    </ParallaxProvider>
  )
}

export default Layout
