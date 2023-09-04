'use client';
import React from 'react';
import { useSelectedLayoutSegments } from 'next/navigation';
import { BriefingRoutesType, SegmentDataType, SegmentsDataType } from '@/constants';
import ProgressBar from '../progress-bar';

interface TitleProps {
  segmentsData: SegmentsDataType;
}

function Title({ segmentsData }: TitleProps) {
  const segments = useSelectedLayoutSegments() as [BriefingRoutesType | undefined];
  let currentSegmentData: SegmentDataType = segmentsData.index;
  if (segments[0] === 'success') {
    return null;
  }
  if (segments[0]) {
    currentSegmentData = segmentsData[segments[0]];
  }
  return (
    <div className="w-full md:w-[70%]">
      <p className="mb-3 flex min-h-[80px] md:min-h-[130px] xl:text-xl lg:text-lg text-base-24 items-center font-bold text-dark-as-night">
        {currentSegmentData?.title}
      </p>
      <ProgressBar
        totalSteps={Object.keys(segmentsData).length}
        currentStep={currentSegmentData.step}
      />
    </div>
  );
}

export default Title;
