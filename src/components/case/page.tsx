import React, { FC } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface ImageProps {
  id: number;
  title: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  description: string;
  question: string;
  /*blur?: boolean;
  blurDataURL: string;*/
}

const Case: FC<ImageProps> = ({ id, title, description, imageSrc, imageAlt, question }) => {
  const textSection = (
    <div className="grid gap-[18px] max-w-[488px] my-0 mx-auto">
      <h3 className=" text-xl text-dark-as-night text-manrope font-bold">{title}</h3>
      <p
        className="
    text-base-21 text-dark-as-night text-manrope">
        {description}
      </p>
      <p
        className="
    text-base-21 leading-[31.5px] text-manrope font-medium
    bg-gradient-main from-deep-sky-blue to-rebecca-purple bg-clip-text text-transparent">
        {question}
      </p>
    </div>
  );

  const imageSection = (
    <Image
      alt={imageAlt}
      src={imageSrc}
      /*placeholder={blur ? 'blur' : 'empty'}
      blurDataURL={blurDataURL}*/
      width={1133}
      height={651}
    />
  );

  return (
    <div
      className="w-full mb-[50px]
        max-2xl:gap-[100px] max-xl:gap-[70px] max-lg:gap-[40px]
        flex flex-row items-center
        font-manrope">
      {id % 2 === 0 ? (
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
