'use client';
import { useSelectedLayoutSegments } from 'next/navigation';
import React from 'react';
import ProgressBar from '../progress-bar';

type SegmentDataType = {
  step: number;
  title: string;
};

const totalSteps = 8; // length of segmentsData - 1

const segmentsData = {
  index: { step: 1, title: 'Вопросы для знакомства' },
  type: { step: 2, title: 'Общая информация о продукте или проекте' },
  platform: { step: 3, title: 'На какой платформе вам нужен продукт?' },
  description: { step: 4, title: 'Опишите разделы и / или компоненты продукта' },
  'add-materials': { step: 5, title: 'Какие материалы вы готовы предоставить' },
  'create-content': {
    step: 6,
    title: 'Предполагается ли создание оригинального контента разработчиками?',
  },
  'graphic-presentation': { step: 7, title: 'Графическое оформление вашего продукта' },
  contacts: { step: 8, title: 'Как нам с вами связаться?' },
  success: undefined,
} as const;

export type SegmentsDataType = typeof segmentsData;

function Title() {
  const segments = useSelectedLayoutSegments() as (keyof SegmentsDataType | undefined)[];
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
      <ProgressBar totalSteps={totalSteps} currentStep={currentSegmentData.step} />
    </div>
  );
}

export default Title;
