import Image from 'next/image';
import erpNote from '../../../../assets/what-we-do-page/erpNote.jpg';
import crm from '../../../../assets/what-we-do-page/crm.jpg';
import cyfra from '../../../../assets/what-we-do-page/cyfra.jpg';
import mobile from '../../../../assets/what-we-do-page/mobile.jpg';
import webNote from '../../../../assets/what-we-do-page/webNote.jpg';
import webServiceNote from '../../../../assets/what-we-do-page/webServiceNote.jpg';
import softwareNote from '../../../../assets/what-we-do-page/softwareNote.jpg';
import marketPlaceNote from '../../../../assets/what-we-do-page/marketPlaceNote.jpg';
import consultingNote from '../../../../assets/what-we-do-page/consultingNote.jpg';
import { StaticImageData } from 'next/image';

interface CaseData {
  id: number;
  title: string;
  description: string;
  question: string;
  imageSrc: StaticImageData;
}

interface FeedBackData {
  description: string;
  question: string;
  textBtn: string;
}

export const CaseData: CaseData[] = [
  {
    id: 0,
    title: 'ERP-cистемы',
    description:
      'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
    question: 'И зачем мне это?',
    imageSrc: erpNote,
  },
  {
    id: 1,
    title: 'Разработка CRM-систем',
    description:
      'CRM-система является одним из ключевых элементов успешной бизнес-стратегии в ритейле. Эта аббревиатура расшифровывается как Customer Relations Management и обозначает систему построения отношений с клиентами.',
    question: 'И зачем мне это?',
    imageSrc: crm,
  },
  {
    id: 2,
    title: 'Цифровая трансформация',
    description:
      'Все вокруг меняется: поведение людей, их привычки и потребности. Многие мировые компании поняли желания людей, просчитали развитие новых тенденций и совершили у себя цифровую трансформацию, что и привело их к успеху.',
    question: 'Можно поподробнее?',
    imageSrc: cyfra,
  },
  {
    id: 3,
    title: 'Разработка дизайна интерфейсов UX/UI',
    description:
      'UX/UI дизайн – не только оформление и процесс создания внешнего вида интерфейса, это помощь пользователю в достижении логики и простоты взаимодействия с продуктом.',
    question: 'И зачем мне это?',
    imageSrc: mobile,
  },
  {
    id: 4,
    title: 'Разработка и создание сайта',
    description:
      'Все сейчас продается и покупается в сети и первый шаг для того, чтобы выйти в цифровое пространство – создать сайт, а затем постепенно его развивать.',
    question: 'И зачем мне это?',
    imageSrc: webNote,
  },
  {
    id: 5,
    title: 'Разработка веб-сервисов',
    description:
      'Под разработкой веб-сервисов (web-services) понимается создание сайта или приложения с конкретной целью применения. Веб-сервис – технология, которая воплощает в жизнь идею по оптимизации конкретно взятого процесса.',
    question: 'И зачем мне это?',
    imageSrc: webServiceNote,
  },
  {
    id: 6,
    title: 'Разработка программного обеспечения',
    description:
      'Услуга разработки программного обеспечения на заказ и дальнейшего его сопровождения предполагает как выполнение полного комплекса работ и создания продукта «с нуля», так и реализацию отдельных запросов заказчика.',
    question: 'И зачем мне это?',
    imageSrc: softwareNote,
  },
  {
    id: 7,
    title: 'Маркетплейс',
    description:
      'Маркетплейс – электронная торговая площадка, на которой реализуется товар или услуги разных продавцов',
    question: 'И зачем мне это?',
    imageSrc: marketPlaceNote,
  },
  {
    id: 8,
    title: 'Консалтинг',
    description:
      'Достичь развития и высокого результата в бизнесе уже невозможно без информационных технологий, сэкономьте свое время, позвольте нам стать вашим проводником в цифровой мир. Воспользуйтесь нашими услугами:',
    question: 'С чем вы мне поможете?!',
    imageSrc: consultingNote,
  },
];

export const FeedBackData: FeedBackData[] = [
  {
    description:
      'Наша миссия реализуется при помощи информационных технологий. Мы пытаемся понять клиента и помочь ему прийти к верному решению, упростить ему задачу и сделать лучше его бизнес.',
    question: 'Готовы начать?',
    textBtn: 'Связаться с нами',
  },
];
