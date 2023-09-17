import { ReactNode } from 'react';
import Link from 'next/link';

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="no-underline flex h-full items-center text-[1.4em] hover:bg-clip-text hover:text-transparent hover:bg-gradient-main hover:from-deep-sky-blue hover:to-rebecca-purple">
      {children}
    </Link>
  );
};
