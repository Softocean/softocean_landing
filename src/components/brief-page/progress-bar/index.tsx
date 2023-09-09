'use client';
import React from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface ProgressBarProps {
  totalSteps: number;
  currentStep: number;
}

function ProgressBar({ totalSteps, currentStep }: ProgressBarProps) {
  const isXsMedia = useMediaQuery('(max-width: 480px)');
  const vars = {
    '--w': `calc(${currentStep} * ${isXsMedia ? '160px' : '240px'} / ${totalSteps})`,
  } as React.CSSProperties;
  return (
    <div className="flex flex-row items-center gap-2">
      <span className="text-silver text-sm font-normal">{`шаг ${currentStep} из ${totalSteps}`}</span>
      <div
        className={`relative h-[6px] ${
          isXsMedia ? 'w-[160px]' : 'w-[240px]'
        } rounded-[100px] bg-border-gray`}>
        <div
          style={vars}
          className="to h-full w-[var(--w)] rounded-[100px] bg-gradient-main from-deep-sky-blue to-rebecca-purple transition-[width] duration-300 ease-in-out"></div>
      </div>
    </div>
  );
}

export default ProgressBar;
