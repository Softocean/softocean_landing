import React from 'react';
import WebServicesPicture from '@/../assets/what-we-do-page/web_servicesHigh.png';
import Service from '@/components/service';

const webServicesInfo = {
  tags: ['E-commerce', 'SAAS'],
  name: 'Web Services',
  text: 'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
};

function page() {
  return (
    <Service
      text={webServicesInfo.text}
      name={webServicesInfo.name}
      imgSrc={WebServicesPicture.src}
    />
  );
}

export default page;
