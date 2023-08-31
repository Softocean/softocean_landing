import PartnersContent from '@/components/partnersContent';

export default function Partners() {
  const InfoData = {
    title: 'Готовы сотрудничать в реализации\nпроектов с ИТ компаниями',
    description:
      'ИТ становится не обслуживающим подразделением, а ядром бизнеса. Любой масштабный ИТ-проект теперь затрагивает множество процессов, а соответственно, требует участия всё большего числа служб и топ-менеджеров. Именно поэтому роль CIO и его подразделения росла на протяжении последних лет. Росли и требования к ИТ-грамотности сотрудников технического блока.',
    textButton: 'Связаться',
  };

  return (
    <PartnersContent
      title={InfoData.title}
      description={InfoData.description}
      textButton={InfoData.textButton}
    />
  );
}
