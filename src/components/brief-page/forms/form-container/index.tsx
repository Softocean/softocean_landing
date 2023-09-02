'use client';
import React from 'react';
import BriefNavButtons from '../../nav-buttons';
import { BriefingRoutesType } from '@/constants';

interface BriefFormContainerProps {
  type: 'button' | 'submit';
  wrapperClassName?: string;
  children: React.ReactNode;
  nextStepHref?: BriefingRoutesType;
}

function BriefFormContainer({
  children,
  type,
  wrapperClassName,
  nextStepHref,
}: BriefFormContainerProps) {
  return (
    <div>
      <div className={`mt-10 w-[100%] min-h-[320px]`}>
        <div className={wrapperClassName}>{children}</div>
      </div>
      <div className="mt-12">
        <BriefNavButtons type={type} nextHref={nextStepHref} />
      </div>
    </div>
  );
}

export default BriefFormContainer;
