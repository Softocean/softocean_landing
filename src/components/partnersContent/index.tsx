'use client';

import { Button } from '@/components/ui';

interface PartnersProps {
  title: string;
  description: string;
  textButton: string;
}

export default function PartnersContent({ title, description, textButton }: PartnersProps) {
  return (
    <div className="mx-auto flex flex-col justify-center gap-[32px]">
      <h2
        className="
          ml-[25px] max-w-[1192px] justify-self-center  whitespace-pre-line
          text-xl font-bold text-dark-as-night
          max-2xl:text-lg max-lg:mx-[20px]
          max-lg:max-w-[600px] max-lg:text-base-24">
        {title}
      </h2>
      <p className="text-grey max-w-[900px] justify-self-center text-base max-lg:mx-[20px] max-lg:max-w-[600px]">
        {description}
      </p>
      <Button className="self-center lg:self-start">{textButton}</Button>
    </div>
  );
}
