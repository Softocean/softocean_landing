'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { contactsMock } from '@/data/contacts';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/nav-links';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import logo from '../../../assets/logo-footer.png';
import { NavLink } from '../nav-link';

export default function Header() {
  const pathname = usePathname();
  const [isOpened, setIsOpened] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    setIsOpened(false);
  }, [pathname]);

  function toggleMenu() {
    setIsOpened(!isOpened);
  }

  return (
    <header className={`z-10`}>
      <nav className="text-gray-700 flex w-full flex-wrap items-center justify-start gap-x-12 py-5 text-lg md:flex-nowrap">
        <Link href="/">
          <Image
            src={logo}
            alt="логотип"
            width={150}
            height={60}
            className="w-20 duration-300 ease-in hover:opacity-50 lg:w-32"
          />
        </Link>
        <ul className="hidden justify-between gap-x-5 p-0 md:flex">
          {navLinks.map((item, ind) => {
            return (
              <div key={`nav-link-${ind}`}>
                {item.isActive && (
                  <li className="list-none">
                    <NavLink
                      href={item.link}
                      styles={
                        pathname.includes(item.link)
                          ? 'bg-gradient-main from-deep-sky-blue to-rebecca-purple bg-clip-text text-transparent'
                          : ''
                      }>
                      {item.title}
                    </NavLink>
                  </li>
                )}
              </div>
            );
          })}
        </ul>
        <button
          onClick={toggleMenu}
          className="visible z-10 ml-auto block cursor-pointer md:invisible md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="block h-6 w-6 cursor-pointer md:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {isMobile && (
          //fixed container
          <div
            className={`
            fixed left-0 top-0 z-[2] h-[100vh] w-full transition-transform duration-300
            ${isOpened ? 'translate-x-0 md:flex md:w-auto md:items-center' : 'translate-x-[-100%]'}
          `}
            id="menu">
            {/** Оверлей контейнер на одном уровне с контейнером с контентом (разделенно на слои z-index) (doesn't bubbling on click) */}
            <div
              onClick={() => setIsOpened(false)}
              className="absolute left-0 top-0 z-[2] h-full w-full"
            />
            <div className="relative z-[3] h-full w-fit bg-bg-main bg-opacity-80 shadow-inner backdrop-blur-sm backdrop-saturate-150">
              <div className="flex flex-col gap-6 px-16 pt-12">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="логотип"
                    width={150}
                    height={60}
                    className="w-20 duration-300 ease-in hover:opacity-50"
                  />
                </Link>
                <ul className="text-gray-700 flex flex-col justify-between gap-4 text-base md:invisible md:hidden md:gap-8">
                  {navLinks.map((item, ind) => {
                    return (
                      <li
                        key={`nav-link-${ind}`}
                        className={`${
                          pathname.includes(item.link) && 'border-b border-b-text-primary font-bold'
                        }`}>
                        <Link className={`hover:text-purple-400 block`} href={item.link}>
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
