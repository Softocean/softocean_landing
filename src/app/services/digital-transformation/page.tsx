import React from 'react';
import DigitalHigh from '@/../assets/what-we-do-page/digitalHigh.png';
import Service from '@/components/service';

const DigitalInfo = {
  tags: ['E-commerce', 'SAAS'],
  name: 'Digital Transformation',
  text: 'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
};

function page() {
  return <Service text={DigitalInfo.text} name={DigitalInfo.name} imgSrc={DigitalHigh.src} />;
}

export default page;
