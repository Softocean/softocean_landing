import PartnersContent from '@/components/partnersContent';

export default function Partners() {
  const InfoData = {
    title: 'Основы визуальных коммуникации\nбрендов',
    description:
      'Речь пойдет про основы позиционирования бренда посредством визуальных коммуникаций. Также затронуты темы сущности айдентики и его составляющих.',
    textButton: 'Подробнее',
  };

  return (
    <PartnersContent
      title={InfoData.title}
      description={InfoData.description}
      textButton={InfoData.textButton}
    />
  );
}
