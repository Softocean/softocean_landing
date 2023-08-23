'use client';
import { useSelectedLayoutSegments } from 'next/navigation';
import React from 'react';
import ProgressBar from '../progress-bar';
import { BriefingRoutesType, SegmentDataType, SegmentsDataType } from '@/constants';

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
    <div className="w-[70%]">
      <p className="mb-3 flex min-h-[130px] items-center text-xl font-bold text-dark-as-night">
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
