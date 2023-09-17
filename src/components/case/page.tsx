import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface ImageProps {
  id: number;
  title: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  description: string;
  question: string;
}

function Case({ id, title, description, imageSrc, imageAlt, question }: ImageProps) {
  const textSection = (
    <div
      className="grid max-w-[488px] mt-0 mb-[20px] mx-auto
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
    <Image alt={imageAlt} src={imageSrc} placeholder="blur" width={1133} height={651} />
  );

  return (
    <div
      className="mb-[50px] max-md:mb-[10px] font-manrope 
      mx-auto max-2xl:mx-[20px] w-auto max-md:mx-[8px]">
      {id % 2 === 0 && (
        <div className="flex flex-row items-center max-md:flex-col">
          {textSection}
          {imageSection}
        </div>
      )}
      {id % 2 !== 0 && (
        <div className="flex flex-row items-center max-md:flex-col-reverse">
          {imageSection}
          {textSection}
        </div>
      )}
    </div>
  );
}

export default Case;
