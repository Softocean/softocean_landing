import React from 'react';
import WebDesignPicture from '@/../assets/what-we-do-page/web_designHigh.png';
import Service from '@/components/service';

const WebDesignInfo = {
  tags: ['E-commerce', 'SAAS'],
  name: 'Web Design',
  text: 'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
};

function page() {
  return (
    <Service text={WebDesignInfo.text} name={WebDesignInfo.name} imgSrc={WebDesignPicture.src} />
  );
}

export default page;
