import React, { useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { CustomThemeContext } from '../providers/CustomThemeProvider';
import Typography from '../styled-components/Typography';
import Spacer from '../styled-components/Spacer';

const StyledHeader = styled.header`
  background: ${(props) => props.theme.colors.primary[0]};
  margin-bottom: 1.45rem;
  position: sticky;
  top: 0;
  z-index: 2;
  transition: 0.2s background;
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
  title?: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar: React.FC<Props> = ({ title }) => {
  const { setThemeType, themeType } = useContext(CustomThemeContext);
  return (
    <StyledHeader>
      <Toolbar>
        <Typography variant="h2">
          <Link href="/">
            <a className="nav-link">{title ?? 'App'}</a>
          </Link>
        </Typography>
        <Typography>
          <Link href="/gallery">
            <a className="nav-link">Gallery</a>
          </Link>
        </Typography>
        <Typography>
          <Link href="/image-processing">
            <a className="nav-link">Image Processing</a>
          </Link>
        </Typography>
        <Typography>
          <Link href="/technologies">
            <a className="nav-link">Technologies</a>
          </Link>
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
      <style jsx>
        {`
          .nav-link {
            color: white;
            text-decoration: none;
            margin: 0 15px;
          }
        `}
      </style>
    </StyledHeader>
  );
};

export default NavBar;
