import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui';
import icon from '../../../assets/about/icon.png';
import insta from '../../../assets/about/instagram.png';
import logo from '../../../assets/about/logo.png';
import telegram from '../../../assets/about/telegram.png';

export const metadata: Metadata = {
  title: 'About | SoftOcean',
  description: 'information about SoftOcean and the services provided',
};

export default function About() {
  return (
    <section className="m-auto flex flex-col items-center gap-10">
      <div className="m-auto flex max-w-[768px] flex-col items-center justify-center lg:max-w-[950px]">
        <h1 className="text-[24px] font-bold text-[center] md:text-[36px] lg:text-[48px]">
          <span className="text-[#551DB0]">SOFTOCEAN</span>
        </h1>
        <h3 className="mt-[10px] max-w-[450px] text-[14px] font-light text-[#4C4C4C] text-[center] md:max-w-[768px] md:text-[16px] lg:max-w-[950px] lg:text-[18px]">
          Since 2018, we have specialized in attracting investments for startups, assisting young
          and promising projects in finding their niche in the market. Our expertise and
          professionalism led us to begin developing our own products in 2020, with standout
          creations like BACKBAR, ONETASK, and DATALORIAN.
        </h3>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8">
        <div className="flex max-w-[450px] flex-col gap-6 text-[14px] font-light text-[#4C4C4C] text-[center] md:max-w-[768px] md:gap-3 md:text-[16px] lg:max-w-[950px] lg:text-[18px]">
          <p>
            In 2023, riding the wave of success and growth, we expanded our horizons by venturing
            into the outsourcing domain. Our team of 30 highly skilled professionals is proficient
            in technologies such as Python, React, Next, Go, and PostgreSQL. We actively incorporate
            artificial intelligence in our development processes, ensuring we remain at the cutting
            edge of technological advancement.
          </p>
          <p>
            {' '}
            Over the years, we have successfully executed projects across various sectors, including
            HEALTHTECH, EDTECH, SOCIALTECH, AI, BLOCKCHAIN, and FINTECH. Our ability to take a
            startup from a mere idea and guide it through all stages, up to attracting investors,
            makes us an indispensable partner for many companies.{' '}
          </p>
          <p>
            {' '}
            Our team is our greatest asset. Many of us have been working together for years,
            fostering an unparalleled atmosphere of trust and professionalism. With offices located
            in Europe and the Balkans, we are strategically positioned to be closer to our clients
            and partners.{' '}
          </p>
          <p>
            {' '}
            We take pride in our participation in social programs and actively support the community
            by sponsoring various meetups. Our mission is not only to create outstanding
            technological solutions but also to contribute to societal advancement.{' '}
          </p>
        </div>

        <div className="flex max-w-[450px] flex-col justify-center gap-8 md:max-w-[950px]">
          <div className="flex flex-row items-center justify-between gap-[5px] md:gap-[15px]">
            <div className="h-[32px] w-[32px] md:h-[64px] md:w-[64px]">
              <Image
                src={insta}
                alt="логотип"
                width={64}
                height={64}
                blurDataURL=""
                className="duration-300 ease-in hover:opacity-50"
              />
            </div>
            <div className="h-[32px] w-[32px] md:h-[64px] md:w-[64px]">
              <Image
                src={telegram}
                alt="логотип"
                width={64}
                height={64}
                blurDataURL=""
                className="duration-300 ease-in hover:opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
