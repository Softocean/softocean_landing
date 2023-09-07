'use client';

import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface ImageProps {
  id: number;
  title: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  description: string;
  question: string;
  /*blurDataURL: string;*/
}

const Case: FC<ImageProps> = ({ id, title, description, imageSrc, imageAlt, question }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const textSection = (
    <div
      className="grid max-w-[488px] my-0 mx-auto
      max-2xl:mx-[24px] max-md:mx-[8px]
      gap-[18px] max-xl:gap-[8px] max-md:max-w-full">
      <h3
        className="
        text-dark-as-night text-manrope font-bold
        text-xl max-2xl:text-lg max-xl:base-24 max-lg:text-base">
        {title}
      </h3>
      <p
        className="
        text-dark-as-night text-manrope 
          text-base-21 max-xl:text-base max-lg:text-sm-12">
        {description}
      </p>
      <p
        className="
          leading-[31.5px] text-manrope font-medium
          bg-gradient-main from-deep-sky-blue to-rebecca-purple bg-clip-text text-transparent
          text-base-21 max-xl:text-base max-lg:text-sm-12">
        {question}
      </p>
    </div>
  );

  const imageSection = (
    <Image
      alt={imageAlt}
      src={imageSrc}
      placeholder="blur"
      /*blurDataURL={blurDataURL}*/
      width={1133}
      height={651}
    />
  );

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(window.innerWidth), 150);
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <div
      className=" mb-[50px]
        flex flex-row items-center
        font-manrope
        mx-auto max-2xl:mx-[20px] w-auto max-md:mx-[8px]
        max-md:flex-col max-md:mb-[10px]
        ">
      {width > 768 && id % 2 === 0 ? (
        <>
          {textSection}
          {imageSection}
        </>
      ) : (
        <>
          {imageSection}
          {textSection}
        </>
      )}
    </div>
  );
};

export default Case;
