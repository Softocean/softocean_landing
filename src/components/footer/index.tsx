import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../assets/logo-footer.png';
import { NavLink } from '../nav-link';

function Footer() {
  return (
    <div className="mx-auto flex w-fit flex-col">
      <div className="mx-auto flex justify-between w-[390px] xl:w-[1280px] lg:w-[950px] ">
        <Link href="/" className="text-[1vw]">
          <Image
            src={logo}
            alt="логотип"
            width={136}
            height={68}
            className="ease-in duration-300 hover:opacity-50"
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
            className="flex justify-end text-[16px] font-medium 
                                    leading-[21px] bg-clip-text text-transparent 
                                    bg-gradient-to-r from-[#0B96B4] to-[#551DB0] hover:opacity-50">
            Заполнить бриф
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mx-auto mt-10 flex-col md:flex-row gap-x-6">
        <NavLink href={'/about'}>Кто мы</NavLink>
        <NavLink href={'/what-we-do'}>Чем занимаемся</NavLink>
        <NavLink href={'/blog'}>Блог</NavLink>
        <NavLink href={'/partners'}>Партнерам</NavLink>
        <NavLink href={'/contacts'}>Контакты</NavLink>
        <NavLink href={'/team'}>Команда</NavLink>
      </div>
      <div className="w-full flex flex-row justify-center items-center gap-[45px] mt-[35px]">
        <div className="w-full border-b-2 border-b-[#E5E5E580] hover:border-black ease-in duration-300" />
        <div className="text-center w-[182px] text-[12px] font-normal flex flex-col justify-center text-[#B6B6B6] ease-in duration-300 hover:text-black">
          Softocean 2022 Privacy Policy
        </div>
        <div
          className="w-full border-b-2 border-b-[#E5E5E580] 
                                hover:border-black ease-in duration-300 "
        />
      </div>
    </div>
  );
}

export default Footer;
