'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface BriefNavLink {
  name: string;
  href: string;
}

interface BriefNavigationProps {
  links: Array<BriefNavLink>;
}

function BriefNavigation({ links }: BriefNavigationProps) {
  const pathname = usePathname();
  return (
    <aside className="border-l-[1px] border-border-gray py-6 pl-[60px]">
      <p className="mb-[21px] text-base font-medium text-dark-as-night">Ваш продукт</p>
      <nav className="flex flex-col gap-4">
        {links.map((link, i) => {
          const isActive = pathname === link.href;
          return (
            <li className="h-auto list-none" key={`brief-link-${i}`}>
              <Link
                className={clsx('block text-sm text-brainstem-grey', {
                  'bg-gradient-main from-deep-sky-blue to-rebecca-purple bg-clip-text text-transparent':
                    isActive,
                })}
                scroll={false}
                href={link.href}>
                {link.name}
              </Link>
            </li>
          );
        })}
      </nav>
    </aside>
  );
}

export type BriefLinksType = Array<BriefNavLink>;

export default BriefNavigation;
