import React, { Children } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

type Props = {
  activeClassName: string;
  href: string;
};

const NavLink: React.FC<Props> = ({ children, ...props }) => {
  const child = Children.only(children) as any;
  const router = useRouter();

  let className = child?.props.className || '';
  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;

  console.log(className);

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default NavLink;
