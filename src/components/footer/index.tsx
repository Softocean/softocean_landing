'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/logo/Logo';
import { navLinks } from '@/data/nav-links';
import logo from '../../../assets/logo-footer.png';
import { NavLink } from '../nav-link';

const notVisibleOn = ['products', 'projects', 'services'];

function Footer() {
  const pathname = usePathname();
  const isVisible = () => {
    let visible = true;
    notVisibleOn.forEach((page) => {
      if (pathname.includes(page)) {
        visible = false;
      }
    });
    return visible;
  };

  return (
    <footer className={`mt-auto flex flex-col gap-10 pb-4 lg:gap-24 ${!isVisible() && 'hidden'}`}>
      {/* <div className="mx-auto flex w-full justify-center gap-x-20 md:justify-between">
        <Link href="/" className="text-[1vw]">
          <Image
            src={logo}
            alt="логотип"
            width={136}
            height={68}
            className="duration-300 ease-in hover:opacity-50"
          />
        </Link>
        <div className="flex-column justify-end">
          <p
            className="text-[24px] font-medium 
            leading-[32px] hover:opacity-50">
            +7 (978) 93 444 96
          </p>
          <Link
            href="/briefing"
            className="flex justify-end bg-gradient-to-r from-[#0B96B4] 
            to-[#551DB0] bg-clip-text text-[16px] 
            font-medium leading-[21px] text-transparent hover:opacity-50">
            Заполнить бриф
          </Link>
        </div>
      </div> */}
      {/* <div className="mx-auto mt-10 flex w-full flex-col items-center justify-center gap-x-6 md:flex-row">
        {navLinks.map((item) => {
          return (
            <div key={item.id}>
              {item.isActive && (
                <NavLink
                  href={item.link}
                  styles={
                    pathname.includes(item.link)
                      ? 'bg-gradient-main from-deep-sky-blue to-rebecca-purple bg-clip-text text-transparent'
                      : ''
                  }>
                  {item.title}
                </NavLink>
              )}
            </div>
          );
        })}
      </div> */}
      {/* <div className="mt-[35px] flex w-full flex-row items-center justify-center gap-[45px]"> */}
      {/* <div className="w-full border-b-2 border-b-[#E5E5E580] duration-300 ease-in hover:border-black" /> */}
      <div className="mt-20 flex items-center justify-between md:mt-40">
        <Logo />
      </div>
      <div className="flex flex-col items-center text-body-2-mobile text-text-secondary md:text-body-2">
        <p className="duration-300 ease-in hover:text-black">
          Softocean GmbH {new Date().getFullYear()} ©
        </p>
        <Link href="/privacy-policy" className="hover:text-black">
          Privacy Policy
        </Link>
      </div>
      {/* <div
          className="w-full border-b-2 border-b-[#E5E5E580] 
          duration-300 ease-in hover:border-black "
        /> */}
      {/* </div> */}
    </footer>
  );
}

export default Footer;
