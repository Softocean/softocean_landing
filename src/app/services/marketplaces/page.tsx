import React from 'react';
import MarketplaceIcon from '@/../assets/what-we-do-page/marketplaceHigh.png';
import Service from '@/components/service';

const marketPlaceInfo = {
  tags: ['E-commerce', 'SAAS'],
  name: 'Marketplaces',
  text: 'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
};

function page() {
  return (
    <Service text={marketPlaceInfo.text} name={marketPlaceInfo.name} imgSrc={MarketplaceIcon.src} />
  );
}

export default page;
