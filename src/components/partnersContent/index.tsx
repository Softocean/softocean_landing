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
      <h2 className="ml-[25px] text-xl font-bold text-dark-as-night max-w-[1192px] whitespace-pre-line">
        {title}
      </h2>
      <p className="text-grey text-base max-w-[900px]">{description}</p>
      <Button className="text-sm-16" type="button" text={textButton} />
    </div>
  );
}
