import React from 'react';
import Product from '@/components/product';

const HeromatchInfo = {
  tags: ['E-commerce', 'SAAS'],
  name: 'Heromatch',
  text: 'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
};

function HeromatchPage() {
  return <Product text={HeromatchInfo.text} name={HeromatchInfo.name} tags={HeromatchInfo.tags} />;
}

export default HeromatchPage;
