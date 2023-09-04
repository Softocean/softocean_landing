'use client';
import React from 'react';
import { BriefingRoutesType } from '@/constants';
import BriefNavButtons from '../../nav-buttons';

interface BriefFormContainerProps {
  type: 'button' | 'submit';
  wrapperClassName?: string;
  children: React.ReactNode;
  nextStepHref?: BriefingRoutesType;
  prevStepHref?: BriefingRoutesType;
  onNextClick?: () => void;
}

function BriefFormContainer({
  children,
  type,
  wrapperClassName,
  nextStepHref,
  prevStepHref,
  onNextClick,
}: BriefFormContainerProps) {
  return (
    <div>
      <div className={`mt-6 md:mt-10 w-[100%] min-h-[428px]`}>
        <div className={wrapperClassName}>{children}</div>
      </div>
      <div className="mt-12">
        <BriefNavButtons
          type={type}
          prevHref={prevStepHref}
          nextHref={nextStepHref}
          onNextClick={onNextClick}
        />
      </div>
    </div>
  );
}

export default BriefFormContainer;
