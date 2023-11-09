import React from 'react';
import Image from 'next/image';
import bg from '../../../assets/what-we-do-page/bg_what_we_do.png';

const WTDHeader = () => {
  return (
    <section className="absolute -left-24 -top-28 -z-10 w-full">
      <Image
        src={bg}
        className="relative opacity-60 bg-blend-multiply"
        alt="background"
        width={1000}
        height={800}
      />
      <h1 className="relative -right-24 -top-12 text-right text-base-24 font-bold uppercase text-text-primary xs:-right-12 xs:-top-24 sm:text-lg md:-right-24 md:-top-40 md:text-xl">
        What are we develop?
      </h1>
    </section>
  );
};

export default WTDHeader;
