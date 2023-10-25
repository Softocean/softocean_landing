import React from 'react';
import CRMPicture from '@/../assets/what-we-do-page/crmHigh.png';
import Service from '@/components/service';

const CRMSystemsInfo = {
  name: 'CRM Systems',
  text: 'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
};

function page() {
  return <Service text={CRMSystemsInfo.text} name={CRMSystemsInfo.name} imgSrc={CRMPicture.src} />;
}

export default page;
