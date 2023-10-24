import React from 'react';
import Product from '@/components/product';

const TailbookInfo = {
  tags: ['E-commerce', 'SAAS'],
  name: 'TailbookInfo',
  text: 'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
};

function Tailbook() {
  return <Product text={TailbookInfo.text} name={TailbookInfo.name} tags={TailbookInfo.tags} />;
}

export default Tailbook;
