import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background: #007bff;
  margin-bottom: 1.45rem;
`

const Toolbar = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  display: flex;
`

const IconButton = styled.button`
  background: none;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  margin-right: 20px;
`

type Props = {
  siteTitle: string
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<Props> = ({ siteTitle, setOpen }) => (
  <StyledHeader>
    <Toolbar>
      <IconButton onClick={() => setOpen(prev => !prev)}>
        <i className="material-icons md-36">menu</i>
      </IconButton>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Toolbar>
  </StyledHeader>
)

export default Header
