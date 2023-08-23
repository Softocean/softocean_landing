'use client';

import React from 'react';
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
  const imageLayoutRef = React.useRef<HTMLDivElement>(null);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  const scrollCallback = () => {
    if (imageLayoutRef.current) {
      const translateValute = scrollY >= 525 ? 500 / 2 : scrollY / 2;
      imageLayoutRef.current.style.transform = `translate(0, -${translateValute}px)`;
    }
  };

  React.useEffect(() => {
    let observer: IntersectionObserver;
    if (sectionRef.current) {
      observer = new IntersectionObserver(scrollCallback, {
        threshold: thresholds,
      });
      observer.observe(sectionRef.current);
    }
  }, [sectionRef.current]);

  return (
    <section ref={sectionRef} className="relative h-[613px] overflow-hidden">
      <div className="relative z-[2] ml-[190px] mt-[120px] flex flex-col gap-[45px]">
        <div className="flex flex-col">
          <p className="w-[627px] text-xl font-bold">{title}</p>
          <p className="mt-4 w-[716px] font-semibold">{subText}</p>
        </div>
        <Button type="button">Связаться с нами</Button>
      </div>
      <div
        ref={imageLayoutRef}
        className="absolute top-[-290px] z-[1] transition-all duration-[250ms] ease-linear">
        <Image
          src={layoutImage}
          placeholder="blur"
          blurDataURL={layoutImageLow.src}
          alt="bubbles"
        />
      </div>
      <div className="clear-[float] absolute top-[-20%] z-[1] h-[120%] w-[100%] bg-white/50"></div>
    </section>
  );
}

export default HeaderSectionLayout;
