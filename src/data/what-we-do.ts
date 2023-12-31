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
      "Dive into a world where tasks are automated, insights are deep, and user engagement is at its peak. Let's redefine what's possible with AI.  We use ai every day in development , it helps us get rid of routine , also we are happy to implement ai in any product , as we have done with client littleknitsstory.com and with all our own products",
    href: '/services/erp-systems',
    label: 'Show all',
    img: erp,
  },
  {
    id: 2,
    title: 'WEB DESIGN',
    description:
      'Systems for managing labor resources, production, finances, and assets. Harness the power of real-time data, streamline processes, and make decisions that propel your business forward. We have a lot of experience in developing different ERP-Systems, we have also developed our own closed system DATALORIAN for our own products.',
    href: '/services/web-design',
    label: 'Show all',
    img: webDesign,
  },
  {
    id: 3,
    title: 'WEB SERVICES',
    description:
      'Customer Relationship Management systems tailored to nurture and expand your client base. Deepen relationships, understand your customers, and drive loyalty. Our CRM solutions put your customers at the heart of your business. Still no unique CRM has been created, and almost every product has its own CRM-Systems, uniquely customised for them, also we have developed our own BACKBAR.site our own brand of co-working ITBRANCH.HOUSE',
    href: '/services/web-services',
    label: 'Show all',
    img: webServices,
  },
  {
    id: 4,
    title: 'UI/UX DESIGN',
    description:
      'Developing scalable and efficient Software as a Service (SAAS) solutions to reduce your operational costs and increase productivity. Our SAAS solutions are designed to be reliable and easy-to-use, meeting the demands of modern businesses.',
    href: '/services/ux-ui-design',
    label: 'Show all',
    img: ui,
  },
  {
    id: 5,
    title: 'SAAS',
    description:
      'Marrying aesthetics with functionality. Dive into designs that not only look good but feel right for your users. Creating intuitive and engaging user interfaces to enhance user satisfaction and interaction. Our UX/UI design services focus on delivering visually appealing, user-friendly designs that reflect your brand`s identity.',
    href: '/services/saas',
    label: 'Show all',
    img: saas,
  },

  {
    id: 6,
    title: 'CRM_SYSTEMS',
    description:
      'Our core team came out of HealthTech startup for bigtech (NDA), for 5 years we worked side by side. We are unrivalled in this field',
    href: '/services/crm-systems',
    label: 'Show all',
    img: crm,
  },
  {
    id: 7,
    title: 'DIGITAL',
    description:
      'In addition to the project in this area, we are developing this area ourselves, at the moment we have an online school on programming from our partners and Junior Incubator (internship).',
    href: '/services/digital-transformation',
    label: 'Show all',
    img: digital,
  },
  {
    id: 8,
    title: 'MARKETPLACE',
    description:
      ' our team has done several social media for healthtech and edtech, our expertise helped our client INCOSPLAY.TOP to get a quick start and reach the first rounds of investments',
    href: '/services/marketplaces',
    label: 'Show all',
    img: marketplace,
  },

  {
    id: 9,
    title: 'CONSULTING',
    description:
      'All our products and clients are startups, together we have been through startup incubators and looking for investors, going through several rounds of investments, so we are ready to share our knowledge, to enter a project at any level whether it is an idea or already ready product.',
    href: '/services/consulting',
    label: 'Detail',
    img: consulting,
  },
];

export const whatWeDoReviewData: WhatWeDoReviewData[] = [
  {
    id: 1,
    label: 'Clutch',
    href: '/services',
    img: clutch,
  },
  {
    id: 2,
    label: 'Trustpilot',
    href: '/services',
    img: trustpilot,
  },
  {
    id: 3,
    label: 'Google',
    href: '/services',
    img: google,
  },
];
