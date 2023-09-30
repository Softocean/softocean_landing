'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { partnersLink } from '@/data/partners';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-col items-center gap-2">
        {partnersLink.map((link) => {
          const isActiveLink = pathname === link.href;
          return (
            <li
              key={link.id}
              className={`w-full text-center ${
                isActiveLink &&
                'rounded-full bg-gradient-main from-deep-sky-blue from-0% to-rebecca-purple to-100% p-2 text-white'
              }`}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navigation;
