export const segmentsData = {
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
export type BriefingRoutesType = keyof SegmentsDataType;
export type SegmentDataType = {
  step: number;
  title: string;
};
