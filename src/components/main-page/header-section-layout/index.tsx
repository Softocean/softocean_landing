'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import layoutImageLow from '@/../assets/low-quality/main-page/main-layout-low.jpg';
import layoutImage from '@/../assets/main-page/main-layout.jpg';
import { Button } from '@/components/ui';

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

  function handleClick() {
    console.log('test');
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden sm:h-auto">
      <div className="relative z-[2] m-6 flex flex-col items-center gap-4 px-4 md:mb-32 md:ml-[190px] md:mt-[120px] md:items-baseline md:gap-[45px]">
        <div className="flex flex-col">
          <p className="max-w-xs text-base-21 font-bold lg:w-[627px] lg:text-xl">{title}</p>
          <p className="mt-4 max-w-sm font-semibold md:max-w-md">{subText}</p>
        </div>
        <Button onClick={handleClick}>Contact us</Button>
      </div>
      <div
        ref={imageLayoutRef}
        className="absolute top-[-200px] z-[1] transition-all duration-[250ms] ease-linear md:top-0">
        <Image
          src={layoutImage}
          placeholder="blur"
          blurDataURL={layoutImageLow.src}
          alt="bubbles"
          className="h-screen w-auto object-cover"
        />
      </div>
      <div className="clear-[float] absolute top-[-20%] z-[1] h-[120%] w-[100%] bg-white/50"></div>
    </section>
  );
}

export default HeaderSectionLayout;
