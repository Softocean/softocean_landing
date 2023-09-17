'use client';
import React from 'react';
import Link from 'next/link';
import ArrowIcon from '@/../assets/icons/arrow-back.svg';
import { Button } from '@/components/ui';
import { BriefingRoutesType } from '@/constants';
import { getBriefingFormStepHref } from '@/utils/brief-page-routing';
import SkipButton from '../skip-button';

interface BriefNavButtonsProps {
  type?: 'button' | 'submit';
  onNextClick?: () => void;
  isActive?: boolean;
  prevHref?: BriefingRoutesType;
  nextHref?: BriefingRoutesType;
}

function BriefNavButtons({
  nextHref,
  prevHref,
  onNextClick,
  type = 'button',
}: BriefNavButtonsProps) {
  const nextLinkHref = getBriefingFormStepHref(nextHref);
  const prevLinkHref = getBriefingFormStepHref(prevHref);
  return (
    <div className="flex w-full flex-col-reverse items-end gap-6 md:w-[95%] md:gap-4 2xl:flex-row 2xl:items-center 2xl:justify-between">
      {type !== 'submit' && (
        <p className="text-sm font-normal underline md:text-sm-16">Заполнить бриф вместо вас</p>
      )}
      <div className={`flex flex-row ${prevHref && 'w-full'} justify-between`}>
        {prevLinkHref && (
          <Link href={prevLinkHref}>
            <div className="inline-flex h-fit flex-row gap-1 pt-2 md:hidden">
              <div className="my-auto mt-[6px] rotate-180">
                <ArrowIcon />
              </div>
              <p className="text-sm-16 text-rebecca-purple underline">Назад</p>
            </div>
          </Link>
        )}
        <div className="flex flex-col-reverse flex-nowrap items-center gap-6 md:flex-row md:gap-4">
          {nextLinkHref && (
            <Link href={nextLinkHref} passHref legacyBehavior>
              <SkipButton />
            </Link>
          )}
          <Button type={type} onClick={onNextClick} className="text-sm-16  font-normal">
            Продолжить
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BriefNavButtons;
