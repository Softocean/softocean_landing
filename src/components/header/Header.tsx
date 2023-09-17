'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../assets/logo-footer.png';
import { NavLink } from '../nav-link';

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);
  function toggleMenu() {
    setIsOpened(!isOpened);
  }

  return (
    <header>
      <nav
        className="
         flex flex-wrap md:flex-nowrap
         items-center
         justify-between
         w-full
         py-5
         px-5
         text-lg text-gray-700
         bg-white
         max-w-7xl
         mx-auto
         text-[1vw]
       ">
        <Link href="/" className="text-[1vw]">
          <Image
            src={logo}
            alt="логотип"
            width={136}
            height={68}
            className="ease-in duration-300 hover:opacity-50"
          />
        </Link>

        <ul className="p-0 hidden gap-3 justify-between md:flex">
          <li className="list-none text-[1vw]">
            <NavLink href="/about">Кто мы</NavLink>
          </li>
          <li className="list-none text-[1vw]">
            <NavLink href="/what-we-do">Чем занимаемся</NavLink>
          </li>
          <li className="list-none text-[1vw]">
            <NavLink href="/blog">Блог</NavLink>
          </li>
          <li className="list-none text-[1vw]">
            <NavLink href="/partners">Партнерам</NavLink>
          </li>
          <li className="list-none text-[1vw]">
            <NavLink href="/contacts">Контакты</NavLink>
          </li>
          <li className="list-none text-[1vw]">
            <NavLink href="/team">Команда</NavLink>
          </li>
        </ul>

        <ul className="p-0 hidden gap-3 md:flex">
          <li className="list-none text-[1vw]">
            <Link
              href="/briefing"
              className="no-underline flex h-full items-center text-[1.4em] text-purple-400 text-purple-500 bg-clip-text text-transparent bg-gradient-main from-deep-sky-blue to-rebecca-purple hover:opacity-50">
              Заполнить бриф
            </Link>
          </li>
          <li className="list-none flex text-[1vw]">
            <p className="text-[1.4em] self-center">+7 (999) 999-99-99</p>
          </li>
          <li className="list-none flex text-[1vw]">
            <svg
              className="h-[1.4em] w-[1.4em] self-center cursor-pointer"
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
        </ul>

        <button
          onClick={toggleMenu}
          className="md:invisible md:hidden block visible cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
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
            isOpened ? 'visible w-full md:flex md:items-center md:w-auto' : 'hidden invisible'
          }
          id="menu">
          <ul
            className="
             pt-4
             text-base text-gray-700
             md:flex
             md:justify-between 
             md:pt-0">
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400" href="/about">
                Кто мы
              </Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400" href="/what-we-do">
                Чем занимаемся
              </Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400" href="/blog">
                Блог
              </Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400" href="/partners">
                Партнерам
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                href="/contacts">
                Контакты
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                href="/team">
                Команда
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block text-purple-400 text-purple-500 bg-clip-text text-transparent bg-gradient-main from-deep-sky-blue to-rebecca-purple"
                href="/">
                Заполнить бриф
              </Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400 text-purple-500" href="/">
                +7 (978) 93 444 96
              </Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block" href="/">
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
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
