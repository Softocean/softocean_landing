import React from 'react';
import UIHighPicture from '@/../assets/what-we-do-page/uiHigh.png';
import Service from '@/components/service';

const UiUXInfo = {
  tags: ['E-commerce', 'SAAS'],
  name: 'UI/UX Design',
  text: 'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
};

function page() {
  return <Service text={UiUXInfo.text} name={UiUXInfo.name} imgSrc={UIHighPicture.src} />;
}

export default page;
