import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StockPicture from '@/../assets/what-we-do-page/crmHigh.png';

interface ServiceProps {
  text: string;
  name: string;
  imgSrc?: string;
  imgLowQuality?: string;
  reserveHref?: string;
}

function Service({ text, name, imgSrc, imgLowQuality, reserveHref = '' }: ServiceProps) {
  return (
    <div className="flex w-full flex-nowrap justify-center">
      <div className="container fixed left-[-170px] top-[-130px] -z-10 overflow-hidden md:left-[-300px] md:top-[100px] lg:left-[-300px] xl:left-[-50px] 2xl:left-[2%]">
        <Image
          src={imgSrc ?? StockPicture.src}
          width={814}
          height={814}
          placeholder={imgLowQuality ? 'blur' : undefined}
          blurDataURL={imgLowQuality}
          alt={`softocean ${name}`}
        />
      </div>
      <div className="ml-[0px] flex flex-col justify-center sm:w-[320px] md:ml-[400px] md:w-[520px] lg:w-[600px] xl:ml-[650px]">
        <div className="flex flex-col gap-6">
          <div className="flex max-w-[520px] flex-col gap-5">
            <p className="font-manrope text-h2 font-bold uppercase">{name}</p>
            <p className="font-nunito text-body-1-mobile font-medium text-dark-as-night md:text-body-1">
              {text}
            </p>
          </div>
        </div>
        <div className="mt-10 flex items-center gap-12 text-body-1-mobile md:text-body-1">
          <Link href={reserveHref}>
            <button className="self-center rounded-xl border-2 px-4 py-4 hover:shadow-lg active:scale-[.99] md:px-12">
              Reserve
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Service;
