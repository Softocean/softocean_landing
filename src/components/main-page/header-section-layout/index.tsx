'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import mainBg from '../../../../assets/mainpage-bg.png';

interface HeaderSectionLayoutProps {
  title: string;
  subText: string;
}

function HeaderSectionLayout({ title, subText }: HeaderSectionLayoutProps) {
  useEffect(() => {
    window.onscroll = () => {
      scrollRotate();
    };
  });

  function scrollRotate() {
    const image = document.getElementById('main-bg');
    if (image) {
      image.style.transform = 'rotate(' + window.scrollY / 12 + 'deg)';
    }
  }
  return (
    <section className="mb-[200px] mt-[125px] lg:mb-[240px] lg:mt-[200px]">
      <div className="fixed -top-[20px] left-0 -z-10 max-w-full overflow-hidden 2xl:container">
        <Image
          id="main-bg"
          src={mainBg}
          className="relative -left-40 -top-24 w-full max-w-7xl opacity-60 bg-blend-multiply transition-transform ease-linear md:-left-60 lg:-left-80 lg:-top-48"
          onScroll={scrollRotate}
          alt="Big sphere"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-text-primary text-h1-mobile md:text-h1-tablet xl:text-h1 font-[700]">
          {title.toUpperCase()}
        </h1>
        <p className="text-body-1-mobile md:text-body-1 font-[500]">{subText}</p>
      </div>
    </section>
  );
}

export default HeaderSectionLayout;
