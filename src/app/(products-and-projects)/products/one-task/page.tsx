import React from 'react';
import Product from '@/components/product';

const OneTaskInfo = {
  tags: ['E-commerce', 'SAAS'],
  name: 'OneTask',
  text: 'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
};

function OneTaskPage() {
  return <Product text={OneTaskInfo.text} name={OneTaskInfo.name} tags={OneTaskInfo.tags} />;
}

export default OneTaskPage;
