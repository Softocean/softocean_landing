'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import mainBg from '../../../../assets/mainpage-sphere.png';

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
    <section className="relative mb-[200px] mt-[125px] lg:mb-[240px] lg:mt-[200px]">
      <div className="fixed -top-[20px] -z-10 mx-auto -translate-x-4 overflow-hidden 3xl:container lg:-translate-x-16">
        <Image
          id="main-bg"
          src={mainBg}
          className="relative -left-40 -top-24 w-[1200px] opacity-60 bg-blend-multiply transition-transform ease-linear md:-left-60 lg:-left-80 lg:-top-48"
          onScroll={scrollRotate}
          alt="Big sphere"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-h4-mobile font-bold text-text-primary sm:text-h1-mobile md:text-h1-tablet xl:text-h1">
          {title.toUpperCase()}
        </h1>
        <p className="text-body-1-mobile font-[500] md:text-body-1">{subText}</p>
      </div>
    </section>
  );
}

export default HeaderSectionLayout;
