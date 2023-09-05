import React, { FC } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface ImageProps {
  title: string;
  description: string;
  question: string;
  /*blur?: boolean;
  blurDataURL: string;*/
}

const TextSection: FC<ImageProps> = ({ title, description, question }) => {
  return (
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
};

export default TextSection;
