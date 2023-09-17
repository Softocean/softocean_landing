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
      className="flex h-full items-center text-base no-underline hover:bg-gradient-main hover:from-deep-sky-blue hover:to-rebecca-purple hover:bg-clip-text hover:text-transparent">
      {children}
    </Link>
  );
};
