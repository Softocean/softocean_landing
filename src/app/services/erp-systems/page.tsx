import React from 'react';
import ERPHighPicture from '@/../assets/what-we-do-page/erpHigh.png';
import Service from '@/components/service';

const ErpInfo = {
  tags: ['E-commerce', 'SAAS'],
  name: 'ERP Systems',
  text: 'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
};

function page() {
  return <Service text={ErpInfo.text} name={ErpInfo.name} imgSrc={ERPHighPicture.src} />;
}

export default page;
