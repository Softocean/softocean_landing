'use client';

import { useState } from 'react';
import Button from '@/components/button';

interface PartnersProps {
  title: string;
  description: string;
  textButton: string;
}

export default function PartnersContent({ title, description, textButton }: PartnersProps) {
  return (
    <div className="flex flex-col gap-[32px] ml-[190px]">
      <h2
        className="
        ml-[25px] font-bold text-dark-as-night  whitespace-pre-line
        text-xl max-2xl:text-lg max-lg:text-base-24
        max-w-[1192px] max-lg:min-w-[600px]">
        {title}
      </h2>
      <p className="text-grey text-base max-w-[900px] max-lg:min-w-[600px]">{description}</p>
      <Button className="text-sm-16" type="button" text={textButton} />
    </div>
  );
}
