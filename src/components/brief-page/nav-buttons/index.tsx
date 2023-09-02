'use client';

import Button from '@/components/button';
import Link from 'next/link';
import React from 'react';
import SkipButton from '../skip-button';
import { BriefingRoutesType } from '@/constants';

interface BriefNavButtonsProps {
  type?: 'button' | 'submit';
  onNext?: () => void;
  isActive?: boolean;
  nextHref?: BriefingRoutesType;
}

function BriefNavButtons({ nextHref, onNext, type = 'button' }: BriefNavButtonsProps) {
  const linkHref = `/briefing/${nextHref === 'index' ? '' : nextHref}`;
  return (
    <div className="w-[95%] flex flex-row justify-between">
      <Button className="font-normal text-sm-16">Заполнить бриф вместо вас</Button>
      <div className="flex flex-row flex-nowrap gap-6 items-center">
        <Link href={linkHref} passHref legacyBehavior>
          <SkipButton />
        </Link>
        <Button type={type} onClick={onNext} className="font-normal text-sm-16">
          Продолжить
        </Button>
      </div>
    </div>
  );
}

export default BriefNavButtons;
