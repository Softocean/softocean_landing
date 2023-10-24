import React from 'react';
import Product from '@/components/product';

const ReederInfo = {
  tags: ['E-commerce', 'SAAS'],
  name: 'Reeder',
  text: 'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
};

function ReederPage() {
  return <Product text={ReederInfo.text} name={ReederInfo.name} tags={ReederInfo.tags} />;
}

export default ReederPage;
