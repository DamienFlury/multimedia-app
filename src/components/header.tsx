import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Typography from '../styled-components/Typography'

const StyledHeader = styled.header`
  background: ${props => props.theme.colors.primary[0]};
  margin-bottom: 1.45rem;
  position: sticky;
  top: 0;
  z-index: 2;
`

const Toolbar = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0 1.0875rem;
  display: flex;
  align-items: center;
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
      <Typography variant="h2">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Typography>
    </Toolbar>
  </StyledHeader>
)

export default Header
