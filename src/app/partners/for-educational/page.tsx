import PartnersContent from '@/components/partnersContent';

export default function Partners() {
  const InfoData = {
    title: 'Мы готовы устраивать курсы, обучать студентов,\nстажировать, проводить лекции',
    description:
      'Речь пойдет про основы позиционирования бренда посредством визуальных коммуникаций. Также затронуты темы сущности айдентики и его составляющих.',
    textButton: 'Устроить встречу',
  };

  return (
    <PartnersContent
      title={InfoData.title}
      description={InfoData.description}
      textButton={InfoData.textButton}
    />
  );
}
