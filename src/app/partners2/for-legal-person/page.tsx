import PartnersContent from '@/components/partnersContent';

export default function Partners() {
  const InfoData = {
    title: 'Готовы делать совместные проекты\nс юридическими лицами',
    description:
      'Речь пойдет про основы позиционирования бренда посредством визуальных коммуникаций. Также затронуты темы сущности айдентики и его составляющих. Заменить текст*',
    textButton: 'Предложить проект',
  };

  return (
    <PartnersContent
      title={InfoData.title}
      description={InfoData.description}
      textButton={InfoData.textButton}
    />
  );
}
