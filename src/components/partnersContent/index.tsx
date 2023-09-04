'use client';

import Button from '@/components/button';

interface PartnersProps {
  title: string;
  description: string;
  textButton: string;
}

export default function PartnersContent({ title, description, textButton }: PartnersProps) {
  return (
    <div
      className="
      flex flex-col gap-[32px] ml-[190px]
      max-xl:ml-[80px]
      max-lg:mx-auto justify-center max-lg:grid max-lg:text-center
      ">
      <h2
        className="
          ml-[25px] font-bold text-dark-as-night  whitespace-pre-line
          text-xl max-2xl:text-lg max-lg:text-base-24
          max-w-[1192px] max-lg:max-w-[600px]
          max-lg:mx-[20px] justify-self-center">
        {title}
      </h2>
      <p className="text-grey text-base max-w-[900px] max-lg:max-w-[600px] max-lg:mx-[20px] justify-self-center">
        {description}
      </p>
      <Button className="text-sm-16 max-lg:mx-auto" type="button" text={textButton} />
    </div>
  );
}
