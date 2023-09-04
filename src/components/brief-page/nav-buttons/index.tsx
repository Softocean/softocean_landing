'use client';
import React from 'react';
import Link from 'next/link';
import Button from '@/components/button';
import { BriefingRoutesType } from '@/constants';
import ArrowIcon from '@/../assets/icons/arrow-back.svg';
import SkipButton from '../skip-button';
import { getBriefingFormStepHref } from '@/utils/brief-page-routing';

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
    <div className="w-full md:w-[95%] flex flex-col-reverse items-end gap-6 md:gap-4 2xl:flex-row 2xl:items-center 2xl:justify-between">
      {type !== 'submit' && (
        <p className="font-normal text-sm md:text-sm-16 underline">Заполнить бриф вместо вас</p>
      )}
      <div className={`flex flex-row ${prevHref && 'w-full'} justify-between`}>
        {prevLinkHref && (
          <Link href={prevLinkHref}>
            <div className="inline-flex flex-row h-fit gap-1 md:hidden pt-2">
              <div className="my-auto mt-[6px] rotate-180">
                <ArrowIcon />
              </div>
              <p className="text-sm-16 underline text-rebecca-purple">Назад</p>
            </div>
          </Link>
        )}
        <div className="flex flex-col-reverse md:flex-row flex-nowrap gap-6 md:gap-4 items-center">
          {nextLinkHref && (
            <Link href={nextLinkHref} passHref legacyBehavior>
              <SkipButton />
            </Link>
          )}
          <Button type={type} onClick={onNextClick} className="font-normal  text-sm-16">
            Продолжить
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BriefNavButtons;
