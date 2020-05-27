import React, { useContext } from 'react';
import Link from 'next/link';
import { CustomThemeContext } from '../providers/CustomThemeProvider';
import { useRouter } from 'next/dist/client/router';

type Props = {
  title?: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar: React.FC<Props> = ({ title }) => {
  const { setThemeType, themeType } = useContext(CustomThemeContext);
  const { pathname } = useRouter();
  return (
    <nav className="flex items-center bg-blue-600 text-white sticky top-0 z-10">
      <button className="material-icons px-4">menu</button>
      <Link href="/">
        <a className="nav-link text-2xl p-4">{title ?? 'App'}</a>
      </Link>
      <div className="hidden lg:block">
        <Link href="/images">
          <a
            className={`nav-link ${
              pathname.includes('/images') && 'active'
            } p-2`}
          >
            Bilder
          </a>
        </Link>
        <Link href="/videos">
          <a
            className={`nav-link ${
              pathname.includes('/images') && 'active'
            } p-2`}
          >
            Videos
          </a>
        </Link>
        <Link href="/filetypes">
          <a
            className={`nav-link ${pathname === '/filetypes' && 'active'} p-2`}
          >
            Verwendete Dateitypen
          </a>
        </Link>
        <Link href="/technologies">
          <a
            className={`nav-link ${
              pathname === '/technologies' && 'active'
            } p-2`}
          >
            Technologien
          </a>
        </Link>
        <Link href="/about">
          <a className={`nav-link ${pathname === '/about' && 'active'} p-2`}>
            Über
          </a>
        </Link>
      </div>
      <div className="flex-1" />
      <button
        className="material-icons md-36 mr-4"
        onClick={() =>
          setThemeType((prev) => (prev === 'light' ? 'dark' : 'light'))
        }
      >
        {themeType === 'light' ? 'brightness_2' : 'brightness_5'}
      </button>
    </nav>
  );
};

export default NavBar;
