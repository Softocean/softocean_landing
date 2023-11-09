import React from 'react';
import SAASHighPicture from '@/../assets/what-we-do-page/saasHigh.png';
import Service from '@/components/service';

const SAASInfo = {
  tags: ['E-commerce', 'SAAS'],
  name: 'SAAS',
  text: 'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
};

function page() {
  return <Service text={SAASInfo.text} name={SAASInfo.name} imgSrc={SAASHighPicture.src} />;
}

export default page;
