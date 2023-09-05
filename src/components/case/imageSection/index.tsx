import React, { FC } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface ImageProps {
  imageSrc: StaticImageData;
  imageAlt: string;
}

const ImageSection: FC<ImageProps> = ({ imageAlt, imageSrc }) => {
  return (
    <Image
      alt={imageAlt}
      src={imageSrc}
      /*placeholder={blur ? 'blur' : 'empty'}
      blurDataURL={blurDataURL}*/
      width={1133}
      height={651}
    />
  );
};

export default ImageSection;
