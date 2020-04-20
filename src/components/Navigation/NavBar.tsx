import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Typography from '../../styled-components/Typography';
import Spacer from '../../styled-components/Spacer';
import { CustomThemeContext } from '../../providers/CustomThemeProvider';

const StyledHeader = styled.header`
  background: ${(props) => props.theme.colors.primary[0]};
  margin-bottom: 1.45rem;
  position: sticky;
  top: 0;
  z-index: 2;
`;

const Toolbar = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0 1.0875rem;
  display: flex;
  align-items: center;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

type Props = {
  siteTitle?: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar: React.FC<Props> = ({ siteTitle, setOpen }) => {
  const { setThemeType, themeType } = useContext(CustomThemeContext);
  return (
    <StyledHeader>
      <Toolbar>
        <IconButton onClick={() => setOpen((prev) => !prev)}>
          <i className="material-icons md-36">menu</i>
        </IconButton>
        <Typography variant="h2">
          <NavLink
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle ?? 'App'}
          </NavLink>
        </Typography>
        <Spacer />
        <IconButton
          onClick={() =>
            setThemeType((prev) => (prev === 'light' ? 'dark' : 'light'))
          }
        >
          <i className="material-icons md-36">
            {themeType === 'light' ? 'brightness_2' : 'brightness_5'}
          </i>
        </IconButton>
      </Toolbar>
    </StyledHeader>
  );
};

export default NavBar;
