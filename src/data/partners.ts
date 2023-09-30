type PartnersLinkType = {
  id: number;
  label: string;
  href: string;
};

type PartnersInfoDataType = {
  id: number;
  title: string;
  description: string;
  textButton: string;
  belongTo: string;
};

export const partnersLink: PartnersLinkType[] = [
  {
    id: 1,
    label: 'Мероприятия',
    href: '/partners',
  },
  {
    id: 2,
    label: 'Физическим лицам',
    href: '/partners/for-individuals',
  },
  {
    id: 3,
    label: 'IT компаниям',
    href: '/partners/for-it',
  },
  {
    id: 4,
    label: 'Юридическим лицам',
    href: '/partners/for-legal-person',
  },
  {
    id: 5,
    label: 'Образовательным учреждениям',
    href: '/partners/for-educational',
  },
];

export const partnersInfoData: PartnersInfoDataType[] = [
  {
    id: 1,
    title: 'Основы визуальных коммуникации\nбрендов',
    description:
      'Речь пойдет про основы позиционирования бренда посредством визуальных коммуникаций. Также затронуты темы сущности айдентики и его составляющих.',
    textButton: 'Подробнее',
    belongTo: '/partners',
  },
  {
    id: 2,
    title: 'Готовы делать совместные проекты с\nфизическими лицами',
    description:
      'Речь пойдет про основы позиционирования бренда посредством визуальных коммуникаций. Также затронуты темы сущности айдентики и его составляющих. Заменить текст*',
    textButton: 'Предложить проект',
    belongTo: '/partners/for-individuals',
  },
  {
    id: 3,
    title: 'Готовы сотрудничать в реализации\nпроектов с ИТ компаниями',
    description:
      'ИТ становится не обслуживающим подразделением, а ядром бизнеса. Любой масштабный ИТ-проект теперь затрагивает множество процессов, а соответственно, требует участия всё большего числа служб и топ-менеджеров. Именно поэтому роль CIO и его подразделения росла на протяжении последних лет. Росли и требования к ИТ-грамотности сотрудников технического блока.',
    textButton: 'Связаться',
    belongTo: '/partners/for-it',
  },
  {
    id: 4,
    title: 'Готовы делать совместные проекты\nс юридическими лицами',
    description:
      'Речь пойдет про основы позиционирования бренда посредством визуальных коммуникаций. Также затронуты темы сущности айдентики и его составляющих. Заменить текст*',
    textButton: 'Предложить проект',
    belongTo: '/partners/for-legal-person',
  },
  {
    id: 5,
    title: 'Мы готовы устраивать курсы, обучать студентов,\nстажировать, проводить лекции',
    description:
      'Речь пойдет про основы позиционирования бренда посредством визуальных коммуникаций. Также затронуты темы сущности айдентики и его составляющих.',
    textButton: 'Устроить встречу',
    belongTo: '/partners/for-educational',
  },
];
