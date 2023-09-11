'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import layoutImageLow from '@/../assets/low-quality/main-page/main-layout-low.jpg';
import layoutImage from '@/../assets/main-page/main-layout.jpg';
import Button from '@/components/button';

interface HeaderSectionLayoutProps {
  title: string;
  subText: string;
}

const thresholds: number[] = [];
for (let i = 0; (i += 0.05), i <= 1; ) {
  thresholds.push(i);
}

function HeaderSectionLayout({ title, subText }: HeaderSectionLayoutProps) {
  const imageLayoutRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollCallback = () => {
    if (imageLayoutRef.current) {
      imageLayoutRef.current.style.transform = `translate(0, -${scrollY}px)`;
    }
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    if (sectionRef.current) {
      observer = new IntersectionObserver(scrollCallback, {
        threshold: thresholds,
      });
      observer.observe(sectionRef.current);
    }
  }, [sectionRef.current]);

  return (
    <section ref={sectionRef} className="relative sm:h-auto overflow-hidden">
      <div className="px-4 relative z-[2] m-6 md:ml-[190px] md:mt-[120px] md:mb-32 flex flex-col items-center md:items-baseline gap-4 md:gap-[45px]">
        <div className="flex flex-col">
          <p className="max-w-xs lg:w-[627px] text-base-21 lg:text-xl font-bold">{title}</p>
          <p className="mt-4 max-w-sm md:max-w-md font-semibold">{subText}</p>
        </div>
        <Button type="button">Связаться с нами</Button>
      </div>
      <div
        ref={imageLayoutRef}
        className="absolute top-[-200px] md:top-0 z-[1] transition-all duration-[250ms] ease-linear">
        <Image
          src={layoutImage}
          placeholder="blur"
          blurDataURL={layoutImageLow.src}
          alt="bubbles"
          className="object-cover h-screen w-auto"
        />
      </div>
      <div className="clear-[float] absolute top-[-20%] z-[1] h-[120%] w-[100%] bg-white/50"></div>
    </section>
  );
}

export default HeaderSectionLayout;
