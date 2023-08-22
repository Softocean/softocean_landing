import React from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface AvatarProps {
  avatarSrc: string | StaticImport;
  blur?: boolean;
  blurDataURL: string;
  type: string;
  name: string;
}

function Avatar({ type, name, avatarSrc, blur, blurDataURL }: AvatarProps) {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="rounded-full"
        alt={`softocean ${name}`}
        src={avatarSrc}
        placeholder={blur ? 'blur' : 'empty'}
        blurDataURL={blurDataURL}
        width={210}
        height={210}
      />
      <p className="mt-6 text-base font-medium">{name}</p>
    </div>
  );
}

export default Avatar;
