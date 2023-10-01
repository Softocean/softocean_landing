import { StaticImageData } from 'next/image';
import clutch from '../../assets/what-we-do-page/clutchco.png';
import consulting from '../../assets/what-we-do-page/consulting.png';
import crm from '../../assets/what-we-do-page/crm.png';
import digital from '../../assets/what-we-do-page/digital.png';
import erp from '../../assets/what-we-do-page/erp.png';
import google from '../../assets/what-we-do-page/google.png';
import marketplace from '../../assets/what-we-do-page/marketplace.png';
import saas from '../../assets/what-we-do-page/saas.png';
import trustpilot from '../../assets/what-we-do-page/trustpilot-1 1.png';
import ui from '../../assets/what-we-do-page/ui.png';
import webDesign from '../../assets/what-we-do-page/web_design.png';
import webServices from '../../assets/what-we-do-page/web_services.png';

export type WhatWeDoDataType = {
  id: number;
  title: string;
  description: string;
  href: string;
  label: string;
  img: StaticImageData;
};

export type WhatWeDoReviewData = {
  id: number;
  label: string;
  href: string;
  img: StaticImageData;
};

export const whatWeDoData: WhatWeDoDataType[] = [
  {
    id: 1,
    title: 'ERP-SYSTEMS',
    description:
      'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
    href: '',
    label: 'Show all',
    img: erp,
  },
  {
    id: 2,
    title: 'CRM-SYSTEMS',
    description:
      'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
    href: '',
    label: 'Show all',
    img: crm,
  },
  {
    id: 3,
    title: 'DIGITAL TRANSFORMATION',
    description:
      'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
    href: '',
    label: 'Show all',
    img: digital,
  },
  {
    id: 4,
    title: 'UX/UI DESIGN',
    description:
      'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
    href: '',
    label: 'Show all',
    img: ui,
  },
  {
    id: 5,
    title: 'WEB DESIGN',
    description:
      'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
    href: '',
    label: 'Show all',
    img: webDesign,
  },
  {
    id: 6,
    title: 'WEB SERVICES',
    description:
      'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
    href: '',
    label: 'Show all',
    img: webServices,
  },
  {
    id: 7,
    title: 'SAAS',
    description:
      'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
    href: '',
    label: 'Show all',
    img: saas,
  },
  {
    id: 8,
    title: 'MARKETPLACES',
    description:
      'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
    href: '',
    label: 'Show all',
    img: marketplace,
  },
  {
    id: 9,
    title: 'CONSULTING',
    description:
      'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
    href: '',
    label: 'Show all',
    img: consulting,
  },
];

export const whatWeDoReviewData: WhatWeDoReviewData[] = [
  {
    id: 1,
    label: 'Clutch',
    href: '',
    img: clutch,
  },
  {
    id: 2,
    label: 'Trustpilot',
    href: '',
    img: trustpilot,
  },
  {
    id: 3,
    label: 'Google',
    href: '',
    img: google,
  },
];
