import React, { useContext } from 'react';
import Link from 'next/link';
import { CustomThemeContext } from '../providers/CustomThemeProvider';
import Spacer from '../styled-components/Spacer';
import { useRouter } from 'next/dist/client/router';

type Props = {
  title?: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar: React.FC<Props> = ({ title }) => {
  const { setThemeType, themeType } = useContext(CustomThemeContext);
  const { pathname } = useRouter();
  return (
    <nav className="flex items-center bg-blue-600 text-white shadow-lg sticky top-0">
      <button className="material-icons px-4">menu</button>
      <Link href="/">
        <a className="nav-link text-2xl p-4">{title ?? 'App'}</a>
      </Link>
      <Link href="/gallery">
        <a
          className={`nav-link ${
            pathname.includes('/gallery') && 'active'
          } p-2`}
        >
          Galerie
        </a>
      </Link>
      <Link href="/image-processing">
        <a
          className={`nav-link ${
            pathname === '/image-processing' && 'active'
          } p-2`}
        >
          Bildbearbeitung
        </a>
      </Link>
      <Link href="/techniques">
        <a className={`nav-link ${pathname === '/techniques' && 'active'} p-2`}>
          Techniken
        </a>
      </Link>
      <Link href="/filetypes">
        <a className={`nav-link ${pathname === '/filetypes' && 'active'} p-2`}>
          Verwendete Dateitypen
        </a>
      </Link>
      <Link href="/technologies">
        <a
          className={`nav-link ${pathname === '/technologies' && 'active'} p-2`}
        >
          Technologien
        </a>
      </Link>
      <Link href="/about">
        <a className={`nav-link ${pathname === '/about' && 'active'} p-2`}>
          Über
        </a>
      </Link>
      <Spacer />
      <i
        className="material-icons md-36"
        onClick={() =>
          setThemeType((prev) => (prev === 'light' ? 'dark' : 'light'))
        }
      >
        {themeType === 'light' ? 'brightness_2' : 'brightness_5'}
      </i>
    </nav>
  );
};

export default NavBar;
