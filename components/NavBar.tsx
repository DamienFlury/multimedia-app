import React, { useContext } from 'react';
import Link from 'next/link';
import { CustomThemeContext } from '../providers/CustomThemeProvider';
import Typography from '../styled-components/Typography';
import Spacer from '../styled-components/Spacer';
import { useRouter } from 'next/dist/client/router';

const StyledHeader = styled.header`
  background: ${(props) => props.theme.colors.primary[0]};
  margin-bottom: 1.45rem;
  position: sticky;
  top: 0;
  z-index: 3;
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

const MenuIcon = styled(IconButton)`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

type Props = {
  title?: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar: React.FC<Props> = ({ title }) => {
  const { setThemeType, themeType } = useContext(CustomThemeContext);
  const { pathname } = useRouter();
  return (
    <StyledHeader>
      <Toolbar>
        <MenuIcon>
          <i className="material-icons">menu</i>
        </MenuIcon>
        <Typography variant="h2">
          <Link href="/">
            <a className="nav-link" style={{ color: 'white' }}>
              {title ?? 'App'}
            </a>
          </Link>
        </Typography>
        <NavLinks>
          <Typography>
            <Link href="/gallery">
              <a
                className={`nav-link ${
                  pathname.includes('/gallery') && 'active'
                }`}
              >
                Galerie
              </a>
            </Link>
          </Typography>
          <Typography>
            <Link href="/image-processing">
              <a
                className={`nav-link ${
                  pathname === '/image-processing' && 'active'
                }`}
              >
                Bildbearbeitung
              </a>
            </Link>
          </Typography>
          <Typography>
            <Link href="/techniques">
              <a
                className={`nav-link ${pathname === '/techniques' && 'active'}`}
              >
                Techniken
              </a>
            </Link>
          </Typography>
          <Typography>
            <Link href="/filetypes">
              <a
                className={`nav-link ${pathname === '/filetypes' && 'active'}`}
              >
                Verwendete Dateitypen
              </a>
            </Link>
          </Typography>
          <Typography>
            <Link href="/technologies">
              <a
                className={`nav-link ${
                  pathname === '/technologies' && 'active'
                }`}
              >
                Technologien
              </a>
            </Link>
          </Typography>
          <Typography>
            <Link href="/about">
              <a className={`nav-link ${pathname === '/about' && 'active'}`}>
                Über
              </a>
            </Link>
          </Typography>
        </NavLinks>
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
            color: #c9c9c9;
            text-decoration: none;
            margin: 0 15px;
          }
          .active {
            color: white;
          }
        `}
      </style>
    </StyledHeader>
  );
};

export default NavBar;
