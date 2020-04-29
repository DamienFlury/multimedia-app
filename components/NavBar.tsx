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
  const router = useRouter();
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 shadow-sm sticky top-0 z-10">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <Link href="/">
            <a className="nav-link">{title ?? 'App'}</a>
          </Link>
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center sm:w-auto">
        <div className="text-sm flex-grow">
          <Link href="/gallery">
            <a
              className={`block mt-4 lg:inline-block lg:mt-0 ${
                router.pathname === '/gallery' ? 'text-white' : 'text-teal-200'
              } hover:text-white mr-4`}
            >
              Galerie
            </a>
          </Link>
          <Link href="/image-processing">
            <a
              className={`block mt-4 lg:inline-block lg:mt-0 ${
                router.pathname === '/image-processing'
                  ? 'text-white'
                  : 'text-teal-200'
              } hover:text-white mr-4`}
            >
              Bildbearbeitung
            </a>
          </Link>
          <Link href="/technologies">
            <a
              className={`block mt-4 lg:inline-block lg:mt-0 ${
                router.pathname === '/technologies'
                  ? 'text-white'
                  : 'text-teal-200'
              } hover:text-white mr-4`}
            >
              Technologien
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
