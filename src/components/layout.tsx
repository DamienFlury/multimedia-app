/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import './layout.css'
import Typography from '../styled-components/Typography'

const Drawer = styled.div`
  background-color: #121212;
  height: 100vh;
  color: white;
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
      {open && (
        <Drawer>
          <Typography>This is a drawer</Typography>
        </Drawer>
      )}
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
