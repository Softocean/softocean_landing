'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { contactsMock } from '@/data/contacts';
import { navLinks } from '@/data/nav-links';
import logo from '../../../assets/logo-footer.png';
import { NavLink } from '../nav-link';

export default function Header() {
  const pathname = usePathname();
  const [isOpened, setIsOpened] = useState(false);

  function toggleMenu() {
    setIsOpened(!isOpened);
  }

  return (
    <header>
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
          {navLinks.map((item) => {
            return (
              <div key={item.id}>
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
        {/* <ul className="ml-auto hidden gap-3 p-0 lg:flex">
          <li className="list-none text-sm">
            <Link
              href="/briefing"
              className="text-purple-500 flex h-full items-center bg-gradient-main from-deep-sky-blue to-rebecca-purple bg-clip-text text-transparent no-underline hover:opacity-50">
              Заполнить бриф
            </Link>
          </li>
          <li className="flex list-none text-sm">
            <p className="self-center ">+7 (999) 999-99-99</p>
          </li>
          <li className="flex list-none">
            <svg
              className="w-6 cursor-pointer self-center"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              fill="none">
              <path
                d="M14.69 11.4401C13.639 11.4401 12.712 11.9366 12.1063 12.6969L6.48859 9.84832C6.56213 9.57635 6.61499 9.29533 6.61499 8.99958C6.61499 8.67762 6.55221 8.37451 6.46461 8.07955L12.0576 5.24411C12.6599 6.0388 13.6109 6.55822 14.6908 6.55822C16.5202 6.55822 18 5.09093 18 3.27871C18 1.46812 16.5202 0 14.6909 0C12.8657 0 11.3842 1.46812 11.3842 3.27867C11.3842 3.57526 11.4371 3.85707 11.5115 4.12988L5.89452 6.97847C5.28805 6.21739 4.35932 5.71928 3.30667 5.71928C1.47897 5.71928 0 7.1882 0 8.99958C0 10.811 1.47901 12.2791 3.30667 12.2791C4.38824 12.2791 5.33846 11.758 5.94325 10.9625L11.5337 13.798C11.4461 14.0921 11.3825 14.3977 11.3825 14.7205C11.3825 16.5319 12.864 18 14.6892 18C16.5185 18 17.9984 16.5319 17.9984 14.7205C17.9992 12.9075 16.5194 11.4401 14.69 11.4401Z"
                fill="url(#paint0_linear_4981_3398)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_4981_3398"
                  x1="14.5823"
                  y1="-12.1622"
                  x2="1.23466"
                  y2="-8.20718"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0B96B4" />
                  <stop offset="1" stopColor="#551DB0" />
                </linearGradient>
              </defs>
            </svg>
          </li>
        </ul> */}
        <button
          onClick={toggleMenu}
          className="visible ml-auto block cursor-pointer md:invisible md:hidden">
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
        <div
          className={
            isOpened ? 'visible w-full md:flex md:w-auto md:items-center' : 'invisible hidden'
          }
          id="menu">
          <ul className="text-gray-700 pt-4 text-base flex flex-col justify-between md:invisible md:hidden">
            {navLinks.map((item) => {
              return (
                <li key={item.id}>
                  <Link className="hover:text-purple-400 block py-2 md:p-4" href={item.link}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
            {/* <li>
              <Link
                className="text-purple-400 text-purple-500 block bg-gradient-main from-deep-sky-blue to-rebecca-purple bg-clip-text py-2 text-transparent md:p-4"
                href="/">
                Заполнить бриф
              </Link>
            </li>
            <li>
              <Link className="hover:text-purple-400 text-purple-500 block py-2 md:p-4" href="/">
                {typeof contactsMock[0].value === 'string' && contactsMock[0].value}
              </Link>
            </li>
            <li>
              <Link className="block py-2 md:p-4" href="/">
                <svg
                  className="h-[18px] w-[18px] cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                  fill="none">
                  <path
                    d="M14.69 11.4401C13.639 11.4401 12.712 11.9366 12.1063 12.6969L6.48859 9.84832C6.56213 9.57635 6.61499 9.29533 6.61499 8.99958C6.61499 8.67762 6.55221 8.37451 6.46461 8.07955L12.0576 5.24411C12.6599 6.0388 13.6109 6.55822 14.6908 6.55822C16.5202 6.55822 18 5.09093 18 3.27871C18 1.46812 16.5202 0 14.6909 0C12.8657 0 11.3842 1.46812 11.3842 3.27867C11.3842 3.57526 11.4371 3.85707 11.5115 4.12988L5.89452 6.97847C5.28805 6.21739 4.35932 5.71928 3.30667 5.71928C1.47897 5.71928 0 7.1882 0 8.99958C0 10.811 1.47901 12.2791 3.30667 12.2791C4.38824 12.2791 5.33846 11.758 5.94325 10.9625L11.5337 13.798C11.4461 14.0921 11.3825 14.3977 11.3825 14.7205C11.3825 16.5319 12.864 18 14.6892 18C16.5185 18 17.9984 16.5319 17.9984 14.7205C17.9992 12.9075 16.5194 11.4401 14.69 11.4401Z"
                    fill="url(#paint0_linear_4981_3398)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_4981_3398"
                      x1="14.5823"
                      y1="-12.1622"
                      x2="1.23466"
                      y2="-8.20718"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0B96B4" />
                      <stop offset="1" stopColor="#551DB0" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}
