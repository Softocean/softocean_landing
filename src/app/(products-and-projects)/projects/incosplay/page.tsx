import React from 'react';
import Product from '@/components/product';

const IncosplayInfo = {
  tags: ['E-commerce', 'SAAS'],
  name: 'Incosplay',
  text: 'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
};

function IncosplayPage() {
  return <Product text={IncosplayInfo.text} name={IncosplayInfo.name} tags={IncosplayInfo.tags} />;
}

export default IncosplayPage;
